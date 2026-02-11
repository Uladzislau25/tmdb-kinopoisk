import s from "./Rating.module.css"
type Props = {
  value: [number, number]
  onChange: (value: [number, number]) => void
}

export const Rating = ({ value, onChange }: Props) => {
  const [min, max] = value

  const handleChange = (type: "min" | "max", val: number) => {
    if (type === "min" && val <= max) {
      onChange([val, max])
    } else if (type === "max" && val >= min) {
      onChange([min, val])
    }
  }

  return (
    <div className={s.container_rating}>
      <div className={s.header_rating}>
        <span>Rating</span>
        <span className={s.rating}>
          {min} – {max}
        </span>
      </div>

      <div className={s.slider_container}>
        <div className={s.slider_track}></div>
        <input
          type="range"
          min={0}
          max={10}
          step={0.1}
          value={min}
          onChange={(e) => handleChange("min", +e.target.value)}
          className={`${s.slider} ${s.slider_min}`}
        />
        <input
          type="range"
          min={0}
          max={10}
          step={0.1}
          value={max}
          onChange={(e) => handleChange("max", +e.target.value)}
          className={`${s.slider} ${s.slider_max}`}
        />
        <div
          className={s.slider_range}
          style={{
            left: `${(min / 10) * 100}%`,
            right: `${100 - (max / 10) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  )
}
