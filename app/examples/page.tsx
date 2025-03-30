import ComponentExamples from "@/components/examples/component-examples"

export default function ExamplesPage() {
  return (
    <main className="flex-1">
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6 text-primary">UI Component Examples</h1>
        <p className="text-muted-foreground mb-8">
          This page showcases the core UI components that can be used throughout the LMS system.
        </p>

        <ComponentExamples />
      </div>
    </main>
  )
}

