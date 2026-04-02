"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RubricValidatorProps {
  rubricJson: string;
}

function validateRubric(_json: string): { valid: boolean; errors: string[] } {
  try {
    const parsed = JSON.parse(_json);
    if (!parsed.criteria) return { valid: false, errors: ["Missing 'criteria' field"] };
    return { valid: true, errors: [] };
  } catch {
    return { valid: false, errors: ["Invalid JSON"] };
  }
}

export function RubricValidator({ rubricJson }: RubricValidatorProps) {
  const [result, setResult] = useState<{ valid: boolean; errors: string[] } | null>(null);

  return (
    <div className="space-y-2">
      <Button variant="outline" size="sm" onClick={() => setResult(validateRubric(rubricJson))}>
        Validate Rubric
      </Button>
      {result && (
        <div>
          <Badge variant={result.valid ? "default" : "destructive"}>
            {result.valid ? "Valid" : "Invalid"}
          </Badge>
          {result.errors.map((e) => (
            <p key={e} className="text-sm text-destructive mt-1">{e}</p>
          ))}
        </div>
      )}
    </div>
  );
}
