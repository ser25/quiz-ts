import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={410}
        height={168}
        viewBox="0 0 410 168"
        backgroundColor="#252d4a"
        foregroundColor="#7cc6fe"
        {...props}
    >
        <rect x="-16" y="-36" rx="2" ry="2" width="450" height="208" />
    </ContentLoader>
)

export default Skeleton