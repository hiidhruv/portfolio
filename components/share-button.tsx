'use client'

import { Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

interface ShareButtonProps {
  url: string
  title: string
}

export function ShareButton({ url, title }: ShareButtonProps) {
  const { toast } = useToast()

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url
        })
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          console.error('Error sharing:', err)
        }
      }
    } else {
      // Fallback to copying to clipboard
      try {
        await navigator.clipboard.writeText(url)
        toast({
          title: 'Link copied!',
          description: 'The link has been copied to your clipboard.',
          duration: 2000,
        })
      } catch (err) {
        console.error('Error copying to clipboard:', err)
        toast({
          title: 'Error',
          description: 'Failed to copy the link. Please try again.',
          variant: 'destructive',
          duration: 2000,
        })
      }
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-zinc-400 hover:text-white"
      onClick={handleShare}
    >
      <Share2 className="w-4 h-4" />
    </Button>
  )
} 