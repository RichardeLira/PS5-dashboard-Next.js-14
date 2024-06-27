import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Skills() {
  return (
    <Tabs defaultValue="all">
      <TabsList className="flex gap-4">
        <TabsTrigger value="all">Todas</TabsTrigger>
        <TabsTrigger value="frontend">Front-End</TabsTrigger>
        <TabsTrigger value="backend">Back-End</TabsTrigger>
        <TabsTrigger value="others">Outras</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="mt-6">
        <div
          className="grid w-full max-w-[800px] gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
          }}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index}>
              <div className="bg-black opacity-25 w-32 rounded-3xl h-32 flex items-center justify-center" />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="frontend" className="mt-6">
        <div
          className="grid w-full max-w-[800px] gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <div className="bg-black opacity-25 w-32 rounded-3xl h-32 flex items-center justify-center" />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="backend" className="mt-6">
        <div
          className="grid w-full max-w-[800px] gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
          }}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index}>
              <div className="bg-black opacity-25 w-32 rounded-3xl h-32 flex items-center justify-center" />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="others" className="mt-6">
        <div
          className="grid w-full max-w-[800px] gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
          }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index}>
              <div className="bg-black opacity-25 w-32 rounded-3xl h-32 flex items-center justify-center" />
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
