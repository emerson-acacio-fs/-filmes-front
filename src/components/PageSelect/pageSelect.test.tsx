import { screen } from "@testing-library/react"
import { render } from "helpers/test-utils"
import { PageSelect } from "."

describe("< PageSelect />", () => {
  it("Should be rendered with all properties", () => {
    render(<PageSelect page={1} pageNumber={10} />)

    const leftButton = screen.getByText("Anterior")
    expect(leftButton).toBeInTheDocument()
    const rightButton = screen.getByText("Próxima")
    expect(rightButton).toBeInTheDocument()
    const page = screen.getByText("1")
    expect(page).toBeInTheDocument()
  })

  it("Should disable previous button on first page", () => {
    render(<PageSelect page={1} pageNumber={10} />)

    const leftButton = screen.getByText("Anterior")
    expect(leftButton).toBeDisabled()
  })

  it("Should disable next button on last page", () => {
    render(<PageSelect page={10} pageNumber={10} />)

    const rightButton = screen.getByText("Próxima")
    expect(rightButton).toBeDisabled()
  })
})
