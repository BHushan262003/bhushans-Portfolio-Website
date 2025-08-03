import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FirecrawlService } from '@/utils/FirecrawlService';
import { Badge } from "@/components/ui/badge";

interface LinkedInData {
  name: string;
  title: string;
  location: string;
  about: string;
  experience: Array<{
    title: string;
    company: string;
  }>;
  skills: string[];
}

interface LinkedInImporterProps {
  onDataImported: (data: LinkedInData) => void;
}

export const LinkedInImporter = ({ onDataImported }: LinkedInImporterProps) => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('https://www.linkedin.com/in/bhushan-amrutkar');
  const [isLoading, setIsLoading] = useState(false);
  const [extractedData, setExtractedData] = useState<LinkedInData | null>(null);

  const handleSaveApiKey = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter your Firecrawl API key",
        variant: "destructive",
      });
      return;
    }

    const isValid = await FirecrawlService.testApiKey(apiKey);
    if (isValid) {
      FirecrawlService.saveApiKey(apiKey);
      toast({
        title: "Success",
        description: "API key saved successfully",
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid API key. Please check and try again.",
        variant: "destructive",
      });
    }
  };

  const handleImport = async () => {
    setIsLoading(true);
    setExtractedData(null);
    
    try {
      const result = await FirecrawlService.scrapeLinkedIn(linkedinUrl);
      
      if (result.success && result.data?.markdown) {
        const parsedData = FirecrawlService.parseLinkedInData(result.data.markdown);
        setExtractedData(parsedData);
        
        toast({
          title: "Success",
          description: "LinkedIn profile data extracted successfully",
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to extract LinkedIn data",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error importing LinkedIn data:', error);
      toast({
        title: "Error",
        description: "Failed to import LinkedIn data",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplyData = () => {
    if (extractedData) {
      onDataImported(extractedData);
      toast({
        title: "Success",
        description: "Portfolio updated with LinkedIn data",
      });
    }
  };

  const hasApiKey = FirecrawlService.getApiKey();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Import from LinkedIn
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!hasApiKey && (
            <div className="space-y-4 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <h3 className="font-semibold text-amber-800 dark:text-amber-200">
                API Key Required
              </h3>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                To import from LinkedIn, you need a Firecrawl API key. Get one from{' '}
                <a 
                  href="https://firecrawl.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline font-medium"
                >
                  firecrawl.dev
                </a>
              </p>
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Enter your Firecrawl API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
                <Button onClick={handleSaveApiKey} variant="outline">
                  Save API Key
                </Button>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium">LinkedIn Profile URL</label>
            <Input
              type="url"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              placeholder="https://www.linkedin.com/in/your-profile"
            />
          </div>

          <Button
            onClick={handleImport}
            disabled={!hasApiKey || isLoading}
            className="w-full"
          >
            {isLoading ? "Importing..." : "Import LinkedIn Data"}
          </Button>
        </CardContent>
      </Card>

      {extractedData && (
        <Card>
          <CardHeader>
            <CardTitle>Extracted Data Preview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Name:</h3>
              <p>{extractedData.name || 'Not found'}</p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-semibold">Title:</h3>
              <p>{extractedData.title || 'Not found'}</p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-semibold">Location:</h3>
              <p>{extractedData.location || 'Not found'}</p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-semibold">About:</h3>
              <p className="text-sm">{extractedData.about || 'Not found'}</p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-semibold">Experience:</h3>
              <div className="space-y-2">
                {extractedData.experience.length > 0 ? (
                  extractedData.experience.map((exp, index) => (
                    <div key={index} className="text-sm">
                      <p className="font-medium">{exp.title}</p>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">No experience found</p>
                )}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-semibold">Skills:</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {extractedData.skills.length > 0 ? (
                  extractedData.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">No skills found</p>
                )}
              </div>
            </div>
            
            <Button onClick={handleApplyData} className="w-full mt-4">
              Apply to Portfolio
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};