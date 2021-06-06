const Pattern = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 404 384"
      width={404}
      height={384}
      fill="none"
      aria-hidden="true"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <defs>
        <pattern
          id="pattern"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width={404} height={384} fill="url(#pattern)" />
    </svg>
  )
}

export default Pattern