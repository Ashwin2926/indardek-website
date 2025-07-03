// app/about/page.tsx
 
import PageHeader from '@/components/PageHeader'
import { Card, CardContent } from '@/components/ui/card'
import { vision, mission, values } from '@/lib/constants'

export default function AboutPage() {
  return (
    <>
 
      <PageHeader
        title="About Us"
        description="What sets Indardek Limited apart"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Flights", href: "/flight" }, { name: "Booking", href: "/booking" }]}
      />
      <section className="container mx-auto px-4 space-y-12 py-12">
        <Card>
          <CardContent>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p>{vision}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p>{mission}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="text-2xl font-semibold mb-4">Core Values</h3>
            <ul className="list-disc list-inside space-y-2">
              {values.map((val) => (
                <li key={val}>{val}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
