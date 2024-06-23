interface TextRevealProps {
  text: string
}

export default function TextReveal({ text }: TextRevealProps) {
  return (
    <div className="relative">
      <div className="absolute h-full overflow-hidden animate-pulseWidth">
        <div className="relative">
          <h2 className="text-blue-500 text-nowrap">{text}</h2>
          <div className="absolute right-0 top-0 w-2 h-full bg-blue-600" />
        </div>
      </div>
      <h2 className="text-stroke text-transparent">{text}</h2>
    </div>
  )
}
