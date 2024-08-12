export interface ViewDataSlideProps {
  setTitle: (title: string) => void
  setDescription: (description: string) => void
  size: number
  slideMove: boolean
  setSlideMove: (move: boolean) => void
  titleState: string
}
