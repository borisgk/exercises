import Article from "./Article"


function Wardrobe() {

    let wardrobe = [
        { type: "shirt", color: "red", size: "Medium" },
        { type: "shirt", color: "blue", size: "Medium" },
        { type: "pants", color: "blue", size: "Medium" },
        { type: "accessory", color: "sapphire", size: "" },
        { type: "accessory", color: "lilac", size: "" }
      ]

    return wardrobe
      .filter(m => (m.color === "blue"))
      .map(m => <Article type={m.type} color={m.color} size={m.size} key={m.type + m.color + m.size}/>)
}

export default Wardrobe