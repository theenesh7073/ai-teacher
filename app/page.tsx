import CompanionCard from '@/components/companionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import {recentSessions} from "@/constants";


const page = () => {
  return (
    <main>
       <section className="home-section">
        <h1 className='text-2xl underline'></h1>
       <CompanionCard
       id='1'
        name='neura the brain explainer'
        topic='neuroscience'
        subject='brain'
        duration={30}
        color='#ffda6e'
        bookmarked={false}
       />
        <CompanionCard
          id='2'
          name='bob the builder'
          topic='construction'
          subject='building'
          duration={45}
          color='#bde7ff'
          bookmarked={true}
        />
        <CompanionCard
          id='3'
          name='carol the coder'
          topic='programming'
          subject='web development'
          duration={60}
          color='#68d391'
          bookmarked={false}
        />
       </section>
       <section className="home-section">
         <CompanionList 
         title="Recently completed sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"
         />
         <CTA />
       </section>
    </main>
  )
}

export default page