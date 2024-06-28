import NestjsIcon from '@/components/icons/nestjs-icon'
import AngularIcon from '@/components/icons/nestjs-icon copy'
import NextjsIcon from '@/components/icons/nextjs-icon'
import NodeIcon from '@/components/icons/node-icon'
import PrismaIcon from '@/components/icons/prisma-icon'
import TailwindIcon from '@/components/icons/tailwind-icon'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Skills() {
  // TO DO: Separar em outro arquivo depois
  const skills = [
    {
      name: 'prisma',
      type: 'backend',
      icon: <PrismaIcon size={90} />,
    },
    {
      name: 'node',
      type: 'backend',
      icon: <NodeIcon size={90} />,
    },
    {
      name: 'next',
      type: 'frontend',
      icon: <NextjsIcon size={90} />,
    },
    {
      name: 'tailwind',
      type: 'frontend',
      icon: <TailwindIcon size={90} />,
    },
    {
      name: 'nestjs',
      type: 'backend',
      icon: <NestjsIcon size={90} />,
    },
    {
      name: 'angular',
      type: 'frontend',
      icon: <AngularIcon size={90} />,
    },
  ]

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
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="bg-black bg-opacity-25 w-32 rounded-3xl h-32 flex items-center justify-center">
                {skill.icon}
              </div>
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
          {skills
            .filter((skill) => skill.type === 'frontend')
            .map((skill) => (
              <div key={skill.name}>
                <div className="bg-black bg-opacity-25 w-32 rounded-3xl h-32 flex items-center justify-center">
                  {skill.icon}
                </div>
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
          {skills
            .filter((skill) => skill.type === 'backend')
            .map((skill) => (
              <div key={skill.name}>
                <div className="bg-black bg-opacity-25 w-32 rounded-3xl h-32 flex items-center justify-center">
                  {skill.icon}
                </div>
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
          {skills
            .filter((skill) => skill.type === 'others')
            .map((skill) => (
              <div key={skill.name}>
                <div className="bg-black bg-opacity-25 w-32 rounded-3xl h-32 flex items-center justify-center">
                  {skill.icon}
                </div>
              </div>
            ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
