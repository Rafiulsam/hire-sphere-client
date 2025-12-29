import { color, motion } from "motion/react"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{
                            y:[50, 120 , 50] }}
                        transition={{duration: 6 , repeat: Infinity}}
                        src="https://media.istockphoto.com/id/1443245439/photo/business-meeting-businesswoman-woman-office-portrait-job-career-happy-businessman-teamwork.jpg?s=612x612&w=0&k=20&c=1ZR02c1UKfGdBCNWzzKlrwrVZuEiOqnAKcKF4V_t038="
                        className="mb-10 max-w-sm rounded-t-4xl rounded-br-4xl  border-blue-500 border-b-8 border-l-8 shadow-2xl"
                    />
                    <motion.img
                        animate={{
                            x:[100, 150 , 100] }}
                        transition={{duration: 10 , repeat: Infinity}}
                        src="https://img.freepik.com/premium-photo/business-people-teamwork-handshake-meeting-feedback-project-agreement-with-review-closeup-hands-group-with-promotion-opportunity-partnership-b2b-deal-thank-you_590464-399985.jpg"
                        className="max-w-sm rounded-t-4xl rounded-br-4xl  border-blue-500 border-b-8 border-l-8 shadow-2xl "
                    />
                </div>
                <div className='flex-1'>
                    <h1 className="text-5xl font-bold">Find Your Desire <motion.span
                        animate={{
                            color: ["#ff5733", "#33ff33", "#8a33ff"],
                            transition: { duration: 4, repeat: Infinity }
                        }}
                    >Job!</motion.span> </h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;