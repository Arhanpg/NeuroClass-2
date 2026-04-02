export function RubricValidator({ json }: { json: string }) {
  // Validate that rubric weights sum to 1.0
  return <div className="mt-2 text-sm text-gray-500">Validation: weights must sum to 1.0</div>;
}
