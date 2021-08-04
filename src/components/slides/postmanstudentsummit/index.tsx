const CanvasDesign = () => {
    const [height, width] = ["100%", "100%"];
    return (<>
        <div
            style={{
                position: "relative",
                width: width,
                height: height,
                paddingTop: "56.2500%",
                paddingBottom: "48px",
                boxShadow: "0 2px 8px 0 rgba(63, 69, 81, 0.16)",

                marginBottom: "0.9em",
                overflow: "hidden",
                borderRadius: "8px",
                willChange: "transform",
            }}>
            < iframe loading="lazy" style={{ position: "absolute", width: width, height: height, top: 0, left: 0, border: "none", padding: 0, margin: 0 }}
                src="https://www.canva.com/design/DAEmJOe-5O0/view?embed" >
            </iframe>
        </div>
    </>)
}
export default CanvasDesign;