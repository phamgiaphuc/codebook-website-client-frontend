import { Facebook, Github, Linkedin, Mail, MapPin, Phone, X, Youtube } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Dispatch, SetStateAction } from 'react';

type ContactFormProps = {
  setEmailForm: Dispatch<SetStateAction<boolean>>;
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Your name must be at least 2 characters.'
  }),
  email: z.string().email('Your email is invalid.'),
  content: z
    .string()
    .min(10, {
      message: 'The content must be at least 20 characters.'
    })
    .max(200, {
      message: 'The content must be at least 200 characters.'
    })
});

const ContactForm = ({ setEmailForm }: ContactFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      content: ''
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className={`animate-showup absolute top-0 bg-background h-[calc(100vh-72px)] w-full flex flex-col`}>
      <div className='max-w-screen-lg m-auto relative flex gap-8 w-full text-white dark:text-black rounded-2xl bg-foreground shadow-xl p-8'>
        <div className='flex flex-col w-1/3 gap-12'>
          <span className='text-4xl font-extrabold'>Let's discuss something cool toghether</span>
          <div className='flex-1 flex flex-col gap-4'>
            <span className='px-4 py-2 border-background border-2 rounded-lg w-full flex gap-2 items-center'>
              <Mail /> admin@codebook.com
            </span>
            <span className='px-4 py-2 border-background border-2 rounded-lg w-full flex gap-2 items-center'>
              <Phone /> +123 456 789
            </span>
            <span className='px-4 py-2 border-background border-2 rounded-lg w-full flex gap-2 items-center'>
              <MapPin /> Ho Chi Minh city, Vietnam
            </span>
          </div>
          <div className='flex gap-4 items-center'>
            <Facebook />
            <Linkedin />
            <Youtube />
            <Github />
          </div>
        </div>
        <div className='flex-1 bg-background text-foreground rounded-lg p-8 gap-2 flex flex-col'>
          <span className='text-lg font-semibold'>Get in touch with us</span>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Full name'
                        {...field}
                        type='text'
                        className='border-foreground border-2 focus-visible:ring-0'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='example@mail.com'
                        {...field}
                        type='email'
                        className='border-foreground border-2 focus-visible:ring-0'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='content'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your name</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Your content'
                        {...field}
                        className='border-foreground border-2 focus-visible:ring-0'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit' className='w-full'>
                Submit
              </Button>
            </form>
          </Form>
        </div>
        <button
          onClick={() => setEmailForm(false)}
          className='absolute bg-background p-1 text-foreground border-foreground border-2 rounded-full -top-3 -right-3'
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
