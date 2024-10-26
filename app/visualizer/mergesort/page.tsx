'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PlayCircle, PauseCircle, RotateCcw } from 'lucide-react'

export default function MergeSortVisualization() {
  const [array, setArray] = useState<number[]>([64, 34, 25, 12, 22, 11, 90])
  const [sorting, setSorting] = useState(false)
  const [comparing, setComparing] = useState<number[]>([])
  const [merging, setMerging] = useState<number[]>([])
  const [auxiliaryArray, setAuxiliaryArray] = useState<number[]>([])
  const [subArrays, setSubArrays] = useState<[number, number][]>([])
  const sortingRef = useRef(false)

  useEffect(() => {
    return () => {
      sortingRef.current = false
    }
  }, [])

  const generateRandomArray = () => {
    const newArray = Array.from({ length: 8 }, () => Math.floor(Math.random() * 90) + 10)
    setArray(newArray)
    setAuxiliaryArray([...newArray])
    setComparing([])
    setMerging([])
    setSubArrays([])
    setSorting(false)
  }

  useEffect(() => {
    setAuxiliaryArray([...array])
  }, [array])

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const merge = async (start: number, mid: number, end: number) => {
    if (!sortingRef.current) return

    let i = start
    let j = mid + 1
    let k = start
    const tempArray = [...array]

    setSubArrays([[start, mid], [mid + 1, end]])
    await sleep(500)

    while (i <= mid && j <= end) {
      if (!sortingRef.current) return

      setComparing([i, j])
      await sleep(500)

      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        setMerging([k])
        tempArray[k] = auxiliaryArray[i]
        i++
      } else {
        setMerging([k])
        tempArray[k] = auxiliaryArray[j]
        j++
      }
      k++
      setArray(tempArray)
      await sleep(500)
    }

    while (i <= mid) {
      if (!sortingRef.current) return
      setMerging([k])
      tempArray[k] = auxiliaryArray[i]
      setArray(tempArray)
      i++
      k++
      await sleep(500)
    }

    while (j <= end) {
      if (!sortingRef.current) return
      setMerging([k])
      tempArray[k] = auxiliaryArray[j]
      setArray(tempArray)
      j++
      k++
      await sleep(500)
    }

    for (let i = start; i <= end; i++) {
      auxiliaryArray[i] = tempArray[i]
    }

    setComparing([])
    setMerging([])
    await sleep(500)
  }

  const mergeSortHelper = async (start: number, end: number) => {
    if (!sortingRef.current) return
    if (start < end) {
      const mid = Math.floor((start + end) / 2)

      setSubArrays([[start, end]])
      await sleep(500)

      await mergeSortHelper(start, mid)
      await mergeSortHelper(mid + 1, end)

      await merge(start, mid, end)
    }
  }

  const startSorting = async () => {
    setSorting(true)
    sortingRef.current = true
    setSubArrays([])
    setAuxiliaryArray([...array])
    await mergeSortHelper(0, array.length - 1)
    setComparing([])
    setMerging([])
    setSubArrays([])
    setSorting(false)
    sortingRef.current = false
  }

  const stopSorting = () => {
    setSorting(false)
    sortingRef.current = false
    setComparing([])
    setMerging([])
    setSubArrays([])
  }

  const getBarColor = (index: number) => {
    if (comparing.includes(index)) return 'bg-yellow-200'
    if (merging.includes(index)) return 'bg-green-200'
  
    const inSubArray = subArrays.find(([left, right]) => index >= left && index <= right)
    if (inSubArray) return 'bg-purple-200'
    
    return 'bg-blue-200'
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl">Merge Sort Visualization</CardTitle>
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
                onClick={sorting ? stopSorting : startSorting}
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
                    ${getBarColor(index)}
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
              <p>Watch how merge sort recursively divides the array and merges sorted subarrays.</p>
              <p>Purple bars show current subarrays, yellow bars are being compared, and green bars are being merged.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}