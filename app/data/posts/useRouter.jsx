'use client'
import { useRouter } from 'next/navigation';

const UseRouter = () => {
    const router = useRouter()
    return (
        <div>
            <button type='button' onClick={() => router.push('../data')}> move to data</button>
            <button type='button' onClick={() => router.push('../../')}> move to home</button>
        </div>
    )
}

export default UseRouter