'use client'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { z } from 'zod'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { LoaderCircle } from 'lucide-react'
import { postMessage } from '@/action/post-message'
import { useRouter } from 'next/navigation'
const formSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  email: z.string().min(1),
  phone: z.string().min(10),
  service: z.string(),
  message: z.string().min(1)
})
export type MessageFormValues = z.infer<typeof formSchema>

export const ContactClient = () => {
  const [loading, setLoading] = useState(false)
  const route = useRouter()

  const form = useForm<MessageFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  })
  const onSubmit = async (data: MessageFormValues) => {
    try {
      setLoading(true)
      await postMessage(data)
      toast.success('message sent!')
      route.push('/')
    } catch (e) {
      toast.error('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className={'flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'}>
      <h2 className={'text-4xl text-accent'}>Let&apos;s work together</h2>
      <p className={'text-white/60'}>
        I am good at solving problems on my own, so if you need anything, I will
        have the right solution for you.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-6'}>
          <div className={'w-full grid grid-cols-1 md:grid-cols-2 gap-6'}>
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={'Firstname'}
                      className={'w-full'}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={'Lastname'}
                      className={'w-full'}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={'Email'}
                      className={'w-full'}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={'Phone'}
                      className={'w-full'}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger>
                      <SelectValue placeholder={'Select a service'} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={'est'}>Web Development</SelectItem>
                      <SelectItem value={'cst'}>UI/UX Design</SelectItem>
                      <SelectItem value={'mst'}>Logo Design</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    className={'h-[200px]'}
                    placeholder={'type your message here.'}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} type={'submit'}>
            {loading ? (
              <LoaderCircle className={'w-8 h-8 animate-spin'} />
            ) : (
              'Send message'
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}
