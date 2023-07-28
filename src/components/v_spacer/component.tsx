import React from "react"

type ComponentProps = {
    space?: number
    spaceE?: string
}
const VSpacerComponent = ({ space = 1, spaceE }: ComponentProps) => {

    if( spaceE ) {
        return (
            <div style={{ height: spaceE }} />
        )
    }
    return (
        <div style={{ height: `${space * 1}rem` }} />
    )
}
export default VSpacerComponent