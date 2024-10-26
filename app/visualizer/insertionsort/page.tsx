'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PlayCircle, PauseCircle, RotateCcw } from 'lucide-react'

export default function InsertionSortVisualization() {
  const [array, setArray] = useState<number[]>([64, 34, 25, 12, 22, 11, 90])
  const [sorting, setSorting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [comparingIndex, setComparingIndex] = useState(-1)
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
    setCurrentIndex(-1)
    setComparingIndex(-1)
    setSorting(false)
  }

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const insertionSort = async () => {
    setSorting(true)
    sortingRef.current = true
    const arr = [...array]
    const n = arr.length
    const sorted = new Set<number>([0])
    setSortedIndices([0])

    for (let i = 1; i < n; i++) {
      if (!sortingRef.current) return

      setCurrentIndex(i)
      const key = arr[i]
      let j = i - 1

      while (j >= 0 && arr[j] > key) {
        if (!sortingRef.current) return

        setComparingIndex(j)
        await sleep(500)

        arr[j + 1] = arr[j]
        setArray([...arr])
        await sleep(500)
        j--
      }

      arr[j + 1] = key
      setArray([...arr])
      sorted.add(i)
      setSortedIndices(Array.from(sorted))
      await sleep(500)
    }

    setSortedIndices(Array.from({ length: n }, (_, i) => i))
    setCurrentIndex(-1)
    setComparingIndex(-1)
    setSorting(false)
    sortingRef.current = false
  }

  const stopSorting = () => {
    setSorting(false)
    sortingRef.current = false
    setCurrentIndex(-1)
    setComparingIndex(-1)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl">Insertion Sort Visualization</CardTitle>
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
                onClick={sorting ? stopSorting : insertionSort}
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
                    ${index === currentIndex ? 'bg-yellow-200' : 
                    index === comparingIndex ? 'bg-red-200' :
                    sortedIndices.includes(index) ? 'bg-green-200' : 
                    'bg-blue-200'}
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
              <p>Watch how insertion sort builds a sorted array by inserting elements one at a time into their correct position.</p>
              <p>Yellow bar is the current element being inserted, red bar is being compared, green bars are in their sorted positions.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}