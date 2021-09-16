import React, { Dispatch, SetStateAction, useMemo } from 'react'
import { Bar } from '@visx/shape'
import { Group } from '@visx/group'
import { scaleBand, scaleLinear } from '@visx/scale'
import AutoSizer from 'react-virtualized-auto-sizer'

const verticalMargin = 40

// accessors
const getX = (d) => d.x
const getY = (d) => Number(d.y)

type Props = {
  data: any
  width: number
  height: number
  events?: boolean
  setSelectedDatum?: any
}

function Graph({ data, width, height, setSelectedDatum, events = false, ...rest }: Props) {
  // bounds
  const xMax = width
  const yMax = height - verticalMargin

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: data.map(getX),
        padding: 0.1,
      }),
    [xMax, data]
  )

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        // Make the chart domain as small as possible while showing all bars
        // This allows us to use less height for the graph
        domain: [Math.min(...data.map(getY)) * 0.9, Math.max(...data.map(getY))],
      }),
    [yMax, data]
  )

  return (
    <svg width={width} height={height}>
      <Group top={verticalMargin / 2}>
        {data.map((d) => {
          const x = getX(d)
          const barWidth = xScale.bandwidth()
          const barHeight = yMax - (yScale(getY(d)) ?? 0)
          const barX = xScale(x)
          const barY = yMax - barHeight
          return (
            <Bar
              key={`bar-${x}`}
              x={barX}
              y={barY}
              width={barWidth}
              height={barHeight}
              fill="rgba(0, 160, 233, 1)"
              onClick={() => setSelectedDatum(d)}
              onMouseMove={() => setSelectedDatum(d)}
              onMouseEnter={() => setSelectedDatum(d)}
            />
          )
        })}
      </Group>
    </svg>
  )
}

export const BarGraph = ({ data, ...rest }) => (
  <>
    <AutoSizer>{({ width, height }) => <Graph data={data} width={width} height={height} {...rest} />}</AutoSizer>
  </>
)