import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { ContactClient } from '@/app/contact/_components/client'
import { Toaster } from 'react-hot-toast'
const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+1) 236 9670 985'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'chris.wz@icloud.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Kelowna, BC, Canada'
  }
]

export default function ContactPage() {
  return (
    <section className={'py-6'}>
      <div className="container mx-auto">
        <div className={'flex flex-col xl:flex-row gap-[30px]'}>
          <div className={'xl:h-[54%] order-2 xl:order-none'}>
            <ContactClient />
          </div>

          <div
            className={
              'flex-1 flex flex-col items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'
            }
          >
            <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg space-y-6">
              <h2 className="text-xl font-bold text-green-400">
                Form Submission with POST Method:
              </h2>
              <p className="text-gray-300">
                <span className="font-semibold text-green-300">
                  Task in jQuery:
                </span>{' '}
                Sending the form data (e.g., name, email, phone, service, and
                message) to the backend server using an AJAX POST request.
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-green-300">
                  What jQuery Does:
                </span>{' '}
                It captures the form input values, serializes them into a format
                suitable for the server, and sends them via{' '}
                <code className="bg-gray-700 text-green-300 px-1 rounded">
                  $.post()
                </code>{' '}
                or{' '}
                <code className="bg-gray-700 text-green-300 px-1 rounded">
                  $.ajax()
                </code>
                . After receiving a response from the server (e.g., the ID of
                the stored data), it dynamically updates the user interface
                without refreshing the page.
              </p>

              <h2 className="text-xl font-bold text-blue-400">
                Querying Data with GET Method:
              </h2>
              <p className="text-gray-300">
                <span className="font-semibold text-blue-300">
                  Task in jQuery:
                </span>{' '}
                Sending a GET request to retrieve detailed data based on the ID
                received from the POST response.
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-blue-300">
                  What jQuery Does:
                </span>{' '}
                Using{' '}
                <code className="bg-gray-700 text-blue-300 px-1 rounded">
                  $.get()
                </code>{' '}
                or{' '}
                <code className="bg-gray-700 text-blue-300 px-1 rounded">
                  $.ajax()
                </code>
                , jQuery fetches data from the server (e.g., the submitted
                message&apos;s details) and dynamically updates the DOM to
                display the retrieved information (e.g., first name, last name,
                email, etc.).
              </p>

              <h2 className="text-xl font-bold text-purple-400">
                Dynamic Updates to the DOM:
              </h2>
              <p className="text-gray-300">
                <span className="font-semibold text-purple-300">
                  Task in jQuery:
                </span>{' '}
                Dynamically inserting the response from the server (like the
                database ID and retrieved details) into the HTML without a full
                page reload.
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-purple-300">
                  What jQuery Does:
                </span>{' '}
                It modifies the DOM using methods like{' '}
                <code className="bg-gray-700 text-purple-300 px-1 rounded">
                  .html()
                </code>{' '}
                or{' '}
                <code className="bg-gray-700 text-purple-300 px-1 rounded">
                  .append()
                </code>{' '}
                to display the server response in designated sections of the
                page.
              </p>

              <h2 className="text-xl font-bold text-yellow-400">
                Styling Interactions:
              </h2>
              <p className="text-gray-300">
                <span className="font-semibold text-yellow-300">
                  Task in jQuery:
                </span>{' '}
                Adding interactivity to buttons (e.g., changing the button style
                on hover or click).
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-yellow-300">
                  What jQuery Does:
                </span>{' '}
                It uses event listeners like{' '}
                <code className="bg-gray-700 text-yellow-300 px-1 rounded">
                  .on(&apos;click&apos;)
                </code>{' '}
                or{' '}
                <code className="bg-gray-700 text-yellow-300 px-1 rounded">
                  .hover()
                </code>{' '}
                to apply dynamic CSS classes or styles for feedback.
              </p>
            </div>

            <ul className={'flex flex-col gap-10'}>
              {info.map((item, i) => (
                <li key={i} className={'flex items-center gap-6'}>
                  <div
                    className={
                      'w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'
                    }
                  >
                    <div className={'text-[28px]'}>{item.icon}</div>
                  </div>
                  <div className={'flex-1'}>
                    <p className={'text-white/60'}>{item.title}</p>
                    <h3 className={'text-xl'}>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  )
}
