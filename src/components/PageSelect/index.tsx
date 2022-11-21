import { Button } from "components/Button"
import * as S from "./styles"

export type PageSelectProps = {
  page: number
  pageNumber: number
  // eslint-disable-next-line
  handlePage?: (page: number) => void
}

export const PageSelect = ({
  page,
  pageNumber,
  handlePage,
}: PageSelectProps) => {
  const handleClickNext: React.MouseEventHandler<HTMLButtonElement> = () => {
    const nextPage = page + 1
    if (nextPage <= pageNumber && handlePage) {
      handlePage(nextPage)
    }
  }
  const handleClickPrevious: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    const previousPage = page - 1
    if (previousPage > 0 && handlePage) {
      handlePage(previousPage)
    }
  }
  return (
    <S.WrapperPageSelect>
      <Button onClick={handleClickPrevious}>Anterior</Button>
      <S.Page>{page}</S.Page>
      <Button onClick={handleClickNext}>Próxima</Button>
    </S.WrapperPageSelect>
  )
}
