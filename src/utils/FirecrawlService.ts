import FirecrawlApp from '@mendable/firecrawl-js';

interface ErrorResponse {
  success: false;
  error: string;
}

interface ScrapeResponse {
  success: true;
  data: {
    markdown?: string;
    html?: string;
    metadata?: any;
    llm_extraction?: any;
  };
}

type FirecrawlResponse = ScrapeResponse | ErrorResponse;

export class FirecrawlService {
  private static API_KEY_STORAGE_KEY = 'firecrawl_api_key';
  private static firecrawlApp: FirecrawlApp | null = null;

  static saveApiKey(apiKey: string): void {
    localStorage.setItem(this.API_KEY_STORAGE_KEY, apiKey);
    this.firecrawlApp = new FirecrawlApp({ apiKey });
    console.log('API key saved successfully');
  }

  static getApiKey(): string | null {
    return localStorage.getItem(this.API_KEY_STORAGE_KEY);
  }

  static async testApiKey(apiKey: string): Promise<boolean> {
    try {
      console.log('Testing API key with Firecrawl API');
      this.firecrawlApp = new FirecrawlApp({ apiKey });
      // A simple test scrape to verify the API key
      const testResponse = await this.firecrawlApp.scrapeUrl('https://example.com');
      return testResponse.success;
    } catch (error) {
      console.error('Error testing API key:', error);
      return false;
    }
  }

  static async scrapeLinkedIn(url: string): Promise<{ success: boolean; error?: string; data?: any }> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      return { success: false, error: 'API key not found' };
    }

    try {
      console.log('Making scrape request to Firecrawl API for LinkedIn');
      if (!this.firecrawlApp) {
        this.firecrawlApp = new FirecrawlApp({ apiKey });
      }

      const scrapeResponse = await this.firecrawlApp.scrapeUrl(url, {
        formats: ['markdown', 'html'],
        includeTags: ['h1', 'h2', 'h3', 'p', 'span', 'div'],
        excludeTags: ['script', 'style'],
        waitFor: 2000
      }) as FirecrawlResponse;

      if (!scrapeResponse.success) {
        console.error('Scrape failed:', (scrapeResponse as ErrorResponse).error);
        return { 
          success: false, 
          error: (scrapeResponse as ErrorResponse).error || 'Failed to scrape LinkedIn profile' 
        };
      }

      console.log('Scrape successful:', scrapeResponse);
      return { 
        success: true,
        data: scrapeResponse.data 
      };
    } catch (error) {
      console.error('Error during scrape:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to connect to Firecrawl API' 
      };
    }
  }

  static parseLinkedInData(markdown: string) {
    const lines = markdown.split('\n').filter(line => line.trim());
    
    // Extract basic info
    const nameMatch = lines.find(line => line.includes('# ') || line.match(/^[A-Z][a-zA-Z\s]+$/));
    const name = nameMatch?.replace('#', '').trim() || '';
    
    // Extract title/headline
    const titleMatch = lines.find(line => 
      line.toLowerCase().includes('developer') || 
      line.toLowerCase().includes('engineer') ||
      line.toLowerCase().includes('analyst') ||
      line.toLowerCase().includes('manager')
    );
    const title = titleMatch?.trim() || '';
    
    // Extract location
    const locationMatch = lines.find(line => 
      line.toLowerCase().includes('india') ||
      line.toLowerCase().includes('usa') ||
      line.toLowerCase().includes('uk') ||
      line.match(/\b[A-Z][a-z]+,\s*[A-Z][a-z]+\b/)
    );
    const location = locationMatch?.trim() || '';
    
    // Extract about section
    const aboutIndex = lines.findIndex(line => 
      line.toLowerCase().includes('about') || 
      line.toLowerCase().includes('summary')
    );
    let about = '';
    if (aboutIndex !== -1) {
      const aboutLines = lines.slice(aboutIndex + 1, aboutIndex + 5);
      about = aboutLines.join(' ').trim();
    }
    
    // Extract experience
    const experienceIndex = lines.findIndex(line => 
      line.toLowerCase().includes('experience') ||
      line.toLowerCase().includes('work')
    );
    const experience: any[] = [];
    if (experienceIndex !== -1) {
      const expLines = lines.slice(experienceIndex + 1, experienceIndex + 20);
      let currentExp: any = {};
      
      expLines.forEach(line => {
        if (line.includes('·') || line.includes('•') || line.match(/^\d{4}/)) {
          if (currentExp.title) {
            experience.push(currentExp);
          }
          currentExp = { title: line.trim() };
        } else if (line.trim() && currentExp.title && !currentExp.company) {
          currentExp.company = line.trim();
        }
      });
      
      if (currentExp.title) {
        experience.push(currentExp);
      }
    }
    
    // Extract skills (basic extraction)
    const skillsIndex = lines.findIndex(line => 
      line.toLowerCase().includes('skills') ||
      line.toLowerCase().includes('technologies')
    );
    const skills: string[] = [];
    if (skillsIndex !== -1) {
      const skillLines = lines.slice(skillsIndex + 1, skillsIndex + 10);
      skillLines.forEach(line => {
        if (line.trim() && !line.includes('Show') && !line.includes('more')) {
          skills.push(line.trim());
        }
      });
    }
    
    return {
      name,
      title,
      location,
      about,
      experience: experience.slice(0, 5), // Limit to 5 most recent
      skills: skills.slice(0, 10) // Limit to 10 skills
    };
  }
}