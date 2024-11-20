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
import { getMessage, postMessage } from '@/action/post-message'
import { useRouter } from 'next/navigation'
import { formatterDate } from '@/lib/utils'
import { format } from 'date-fns'
const formSchema = z.object({
  firstname: z
    .string()
    .min(2, { message: 'Firstname must be at least 2 characters long' }) // 最少 2 个字符
    .max(50, { message: 'Firstname must not exceed 50 characters' }) // 最多 50 个字符
    .regex(/^[a-zA-Z]+$/, { message: 'Firstname can only contain letters' }), // 仅包含字母

  lastname: z
    .string()
    .min(2, { message: 'Lastname must be at least 2 characters long' }) // 最少 2 个字符
    .max(50, { message: 'Lastname must not exceed 50 characters' }) // 最多 50 个字符
    .regex(/^[a-zA-Z]+$/, { message: 'Lastname can only contain letters' }), // 仅包含字母

  email: z.string().email({ message: 'Invalid email address format' }), // 必须是有效的电子邮件地址

  phone: z.string().regex(/^\d{10,15}$/, {
    message: 'Phone number must be 10-15 digits long'
  }), // 必须是 10 到 15 位的数字

  service: z
    .string()
    .min(1, { message: 'Please select a service' }) // 必须选择服务
    .optional(), // 服务字段可选，但如果有输入，则验证规则生效

  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long' }) // 最少 10 个字符
    .max(500, { message: 'Message must not exceed 500 characters' }) // 最多 500 个字符
})
export type MessageFormValues = z.infer<typeof formSchema>

export const ContactClient = () => {
  const [loading, setLoading] = useState(false)
  const [date_now, setData_now] = useState<number>(Date.now())
  const [messageId, setMessageId] = useState<string>('')
  const [getMessageFromBackEnd, setGetMessageFromBackEnd] = useState<
    (MessageFormValues & { createAt: Date; updatedAt: Date }) | null
  >(null)
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
      const res = await postMessage(data)
      console.log(res)
      setMessageId(res.id)
      toast.success('message sent!')
    } catch (e) {
      console.log(e)
      // @ts-ignore
      toast.error(e.response.data.error)
    } finally {
      setLoading(false)
    }
  }

  const getData = async () => {
    try {
      setLoading(true)
      const res = await getMessage(messageId)
      console.log(res)
      setGetMessageFromBackEnd(res)
      toast.success('Query Ok!')
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
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={'Select a service'} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={'Web Development'}>
                        Web Development
                      </SelectItem>
                      <SelectItem value={'UI/UX Design'}>
                        UI/UX Design
                      </SelectItem>
                      <SelectItem value={'Logo Design'}>Logo Design</SelectItem>
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
              'Send message by post method'
            )}
          </Button>
        </form>
      </Form>
      {messageId && (
        <div className={'mt-6 container p-4 bg-white text-black rounded'}>
          <h3>The ID of the data just sent in the database</h3>
          <div className={'text-red-500 font-bold'}>
            <p>{messageId}</p>
            <Button onClick={getData}>
              {' '}
              {loading ? (
                <LoaderCircle className={'w-8 h-8 animate-spin'} />
              ) : (
                'Query by get method'
              )}
            </Button>
          </div>
          {getMessageFromBackEnd?.firstname && (
            <div>
              <h3>Firstname: {getMessageFromBackEnd.firstname}</h3>
              <h3>Lastname: {getMessageFromBackEnd.lastname}</h3>
              <h3>Email: {getMessageFromBackEnd.email}</h3>
              <h3>Phone: {getMessageFromBackEnd.phone}</h3>
              <h3>Service: {getMessageFromBackEnd.service}</h3>
              <h3>Message: {getMessageFromBackEnd.message}</h3>
              <h3>
                Create time:
                {format(
                  getMessageFromBackEnd.createAt,
                  'MMMM do, yyyy, h:mm a'
                )}
              </h3>
            </div>
          )}
        </div>
      )}
      <div className="mt-6 container p-4 bg-white text-black rounded">
        <h3 className="text-lg font-bold mb-2">
          AJAX responses from the server
        </h3>
        <p>ReadyState = 1 and server connection</p>
        <p>ReadyState = 2 and Request has been received</p>
        <p>ReadyState = 3 and Request is being processed</p>
        <p>ReadyState = 4 and Request finished and Response is ready</p>
        <h3 className="text-lg font-bold mt-4 mb-2">
          The REQUEST Object retrieved the contents of response PROPERTY text
          below from the server, with a GET request.
        </h3>
        <p className={'text-red-500'}>
          Chris&apos;s contact.js, Time: {formatterDate(date_now)}
        </p>
        <p>AJAX is not a programming language.</p>
        <p>AJAX is a technique for accessing web servers from a web page.</p>
        <p>AJAX stands for Asynchronous JavaScript And XML.</p>
      </div>
    </div>
  )
}
