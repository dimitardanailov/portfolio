import Label from '@/components/SimpleLabel'
import TargetBlankLink from '@/components/TargetBlankLink'

const Body = () => {
  const listStyle = 'list-disc mx-6 mt-0 mb-5'

  return (
    <>
      <p className="mt-2">
        <span className="font-bold text-lg">Agencies, Income: 500+ $</span>
      </p>
      <ul className={listStyle}>
        <li>
          <TargetBlankLink
            href="https://gigsremote.com/"
            title="https://gigsremote.com/"
            text="https://gigsremote.com/"
          />
        </li>
        <li>
          <TargetBlankLink
            href="https://www.remobi.co/"
            title="https://www.remobi.co/"
            text="https://www.remobi.co/"
          />
        </li>
        <li>
          <TargetBlankLink
            href="https://edvwerke.ch/"
            title="https://edvwerke.ch/"
            text="https://edvwerke.ch/"
          />
        </li>
        <li>
          <TargetBlankLink
            href="https://remoteit.world/"
            title="https://remoteit.world/"
            text="https://remoteit.world/"
          />
        </li>
      </ul>
      <p className="mt-2">
        <span className="font-bold text-lg">Job Boards, Income: 500+ $</span>
      </p>
      <ul className={listStyle}>
        <li>
          <TargetBlankLink
            href="https://www.upwork.com/nx/find-work/"
            title="Upwork"
            text="Upwork"
          />
        </li>
        <li>
          <TargetBlankLink
            href="https://www.reactiflux.com/promotion#job-board"
            title="reactiflux.com"
            text="reactiflux.com"
          />
        </li>
      </ul>
      <p className="mt-2">
        <span className="font-bold text-lg">Telegram groups, No Profit</span>
      </p>
      <ul className={listStyle}>
        <li>
          <TargetBlankLink
            href="https://t.me/lobsters_hr"
            title="https://t.me/lobsters_hr"
            text="https://t.me/lobsters_hr"
          />
        </li>
        <li>
          <TargetBlankLink
            href="https://t.me/jobstash"
            title="https://t.me/jobstash"
            text="https://t.me/jobstash"
          />
        </li>
        <li>
          <TargetBlankLink
            href="https://t.me/ethereum_hh"
            title="https://t.me/ethereum_hh"
            text="https://t.me/ethereum_hh"
          />
        </li>
        <li>
          <TargetBlankLink
            href="https://t.me/freelancejobpost"
            title="https://t.me/freelancejobpost"
            text="https://t.me/freelancejobpost"
          />
        </li>
        <li>
          <TargetBlankLink
            href="https://t.me/freelancers_int"
            title="https://t.me/freelancers_int"
            text="https://t.me/freelancers_int"
          />
        </li>
      </ul>
      <p>
        <span className="bold">Resources</span>
      </p>
      <ul className={listStyle}>
        <li>
          <TargetBlankLink
            href="https://huggingface.co/mitkox/OwnYourAI/blob/main/Own%20Your%20AI%20-%20Tech%20Deck.pdf"
            title="Own Your AI - Tech Deck"
            text="Own Your AI - Tech Deck"
          />
        </li>
      </ul>
    </>
  )
}

export default Body
