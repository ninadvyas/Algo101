'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PlayCircle, PauseCircle, RotateCcw } from 'lucide-react'

export default function BubbleSortVisualization() {
  const [array, setArray] = useState<number[]>([64, 34, 25, 12, 22, 11, 90])
  const [sorting, setSorting] = useState(false)
  const [comparingIndices, setComparingIndices] = useState<number[]>([-1, -1])
  const [sortedIndices, setSortedIndices] = useState<number[]>([])
  const sortingRef = useRef(false)

  useEffect(() => {
    return () => {
      sortingRef.current = false
    }
  }, [])

  const generateRandomArray = () => {
    const newArray = Array.from({ length: 7 }, () => Math.floor(Math.random() * 90) + 10)
    setArray(newArray)
    setSortedIndices([])
    setComparingIndices([-1, -1])
    setSorting(false)
  }

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const bubbleSort = async () => {
    setSorting(true)
    sortingRef.current = true
    const n = array.length
    const arr = [...array]
    const sorted = new Set<number>()

    for (let i = 0; i < n - 1; i++) {
      let swapped = false

      for (let j = 0; j < n - i - 1; j++) {
        if (!sortingRef.current) return

        setComparingIndices([j, j + 1])
        await sleep(500)

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          swapped = true
          setArray([...arr])
          await sleep(500)
        }
      }

      sorted.add(n - 1 - i)
      setSortedIndices(Array.from(sorted))

      if (!swapped) break
    }

    setSortedIndices(Array.from({ length: n }, (_, i) => i))
    setComparingIndices([-1, -1])
    setSorting(false)
    sortingRef.current = false
  }

  const stopSorting = () => {
    setSorting(false)
    sortingRef.current = false
    setComparingIndices([-1, -1])
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="text-2xl">Bubble Sort Visualization</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-8">
          <div className="flex justify-center gap-2">
            <Button
              variant="outline"
              onClick={generateRandomArray}
              disabled={sorting}
              className="flex gap-2 items-center"
            >
              <RotateCcw className="h-4 w-4" />
              New Array
            </Button>
            <Button
              variant={sorting ? "destructive" : "default"}
              onClick={sorting ? stopSorting : bubbleSort}
              className="flex gap-2 items-center"
            >
              {sorting ? (
                <>
                  <PauseCircle className="h-4 w-4" />
                  Stop
                </>
              ) : (
                <>
                  <PlayCircle className="h-4 w-4" />
                  Start Sorting
                </>
              )}
            </Button>
          </div>

          <div className="flex justify-center items-end gap-2 h-64">
            {array.map((value, index) => (
              <div
                key={index}
                className={`w-16 transition-all duration-500 flex flex-col items-center gap-2
                  ${comparingIndices.includes(index) ? 'bg-yellow-200' :
                  sortedIndices.includes(index) ? 'bg-green-200' : 'bg-blue-200'}
                  rounded-t-lg
                `}
                style={{
                  height: `${(value / 90) * 100}%`,
                }}
              >
                <div className="text-sm font-medium mt-2">{value}</div>
              </div>
            ))}
          </div>

          <div className="text-center text-sm text-gray-600">
            <p>Watch how bubble sort compares adjacent elements and swaps them if they're in the wrong order.</p>
            <p>Yellow bars are being compared, green bars are in their final sorted position.</p>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}