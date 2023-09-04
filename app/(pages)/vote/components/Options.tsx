import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { Badge } from "@/components/ui/badge"


type Props = {
    votes: any
    selectedNumber: any | null
    handleNumberSelect:(number: any) => void
}

const Options = (props: Props) => {

    const { theme } = useTheme();

    return (
        <div className='grid grid-cols-1 gap-4 lg:place-items-stretch place-items-center' style={{ marginTop: "100px" }}>
            <div className='lg:col-span-3 space-x-3 space-y-3 '>
                {/* {Array.from({ length: props.votes }, (_, index) => (
                   <Badge onClick={() => props.handleNumberSelect(index+1)} key={index+1} className='cursor-pointer' variant={props.selectedNumber == index+1 ? "default" : "secondary"}>{index + 1}</Badge>

                ))} */}
                   {props?.votes?.map((e, index) => (
                   <Badge onClick={() => props.handleNumberSelect(e)} key={index} className='cursor-pointer' variant={props.selectedNumber == '_'? "default" : "secondary"}>{e?.name} : {e?.votes}</Badge>

                ))}
            </div>
            <Button className={cn("flex-[0.3] w-[30%] mx-auto mt-10", theme == "light" && "bg-[#F1F0E8] text-black hover:opacity-20 hover:bg-[#F1F0E8] transition hover:text-black px-3")} size={"sm"}>Fetch Votes</Button>
        </div>
    )
}

export default Options