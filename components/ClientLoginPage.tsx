import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const ClientLoginPage: React.FC = () => {
  const handleContactClick = () => {
    window.location.href = '/#free-chat';
  };

  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar onContactClick={handleContactClick} />

      <main className="pt-28 pb-16 bg-white">
        {/* Client overview hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sage-50 border border-sage-100 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <p className="text-sm font-semibold text-sage-700 uppercase tracking-wide">Client Dashboard</p>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-serif font-bold text-sage-900">Welcome back, Anna</h1>
                  <p className="mt-3 text-base sm:text-lg text-stone-700 leading-relaxed">
                    This is your personal space for workouts, food ideas, mindfulness and progress – all tailored around your real life.
                  </p>
                  <p className="mt-2 text-stone-600 text-sm sm:text-base">45, mum of three, lives near Alexandra Park (North London)</p>
                </div>
              </div>

              <div className="w-full lg:w-80 bg-white border border-stone-100 rounded-2xl p-5 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                  <div className="bg-sage-50 rounded-xl px-4 py-3 border border-sage-100">
                    <p className="text-xs uppercase tracking-wide text-sage-700 font-semibold">Current phase</p>
                    <p className="text-sm text-sage-900 font-medium mt-1">Week 4 of 12</p>
                  </div>
                  <div className="bg-sage-50 rounded-xl px-4 py-3 border border-sage-100">
                    <p className="text-xs uppercase tracking-wide text-sage-700 font-semibold">Focus this week</p>
                    <p className="text-sm text-sage-900 font-medium mt-1">Building confidence in the gym + protecting your knees</p>
                  </div>
                  <div className="bg-sage-50 rounded-xl px-4 py-3 border border-sage-100">
                    <p className="text-xs uppercase tracking-wide text-sage-700 font-semibold">Next check-in</p>
                    <p className="text-sm text-sage-900 font-medium mt-1">Tuesday 7:30 pm (online call)</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-stone-700">
                    <span>Your journey so far</span>
                    <span className="font-semibold text-sage-800">30%</span>
                  </div>
                  <div className="h-3 w-full bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full w-[30%] bg-sage-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary navigation */}
        <section className="mt-8 border-b border-stone-200 bg-white/70 backdrop-blur-lg sticky top-[72px] z-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-3 overflow-x-auto py-3">
              {[{ label: 'Dashboard', href: '#dashboard' }, { label: 'Workout Programme', href: '#workout-programme' }, { label: 'Nutrition & Supplements', href: '#nutrition-plan' }, { label: 'Mindfulness Programme', href: '#mindfulness-programme' }, { label: 'Useful Resources', href: '#useful-resources' }, { label: 'Progress Tracking', href: '#progress-tracking' }].map(tab => (
                <a
                  key={tab.href}
                  href={tab.href}
                  className="shrink-0 inline-flex items-center px-4 py-2 rounded-full border border-sage-100 bg-sage-50 text-sage-800 text-sm font-semibold hover:bg-sage-100"
                >
                  {tab.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard area */}
        <section id="dashboard" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-serif font-bold text-sage-900">Today’s Plan</h2>
              <p className="text-stone-600 mt-2 max-w-2xl">Your plan for today is divided into three parts: movement, food and mind. Start where you feel most ready.</p>
            </div>
            <p className="text-sm font-semibold text-sage-700 bg-sage-50 px-4 py-2 rounded-full border border-sage-100">{today}</p>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Workout card */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm flex flex-col">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-sage-900">Today’s Workout</h3>
                <p className="text-stone-700">Lower body strength – knee-friendly version</p>
                <p className="text-sm text-stone-600">Location: Local gym or home with dumbbells</p>
                <p className="text-sm text-stone-600">Estimated time: 35–40 minutes</p>
              </div>

              <ul className="mt-4 space-y-2 text-stone-700 list-disc list-inside">
                <li>5–7 minute warm-up: gentle treadmill walk or slow step-ups</li>
                <li>Supported goblet squats – 3 x 10 reps (hold onto rail if needed)</li>
                <li>Glute bridges – 3 x 12 reps</li>
                <li>Seated leg press – 3 x 10 reps (light to moderate weight)</li>
                <li>Core: dead bug – 3 x 8 reps each side</li>
              </ul>

              <div className="mt-4 bg-sage-50 border border-sage-100 rounded-xl p-4">
                <p className="text-sm font-semibold text-sage-800">Knee & confidence notes</p>
                <p className="text-sm text-sage-900 mt-1 leading-relaxed">Keep your range of motion comfortable, do not force depth in squats, and stop if you feel sharp pain. Focus on slow, controlled movement – this is about building trust in your body, not chasing numbers.</p>
              </div>

              <a href="#workout-programme" className="mt-6 inline-flex items-center text-sage-700 font-semibold hover:text-sage-800">
                View full workout programme
                <span className="ml-2">→</span>
              </a>
            </div>

            {/* Nutrition card */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm flex flex-col">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-sage-900">Today’s Menu</h3>
                <p className="text-stone-700">Balanced meals you can share with the family</p>
              </div>

              <div className="mt-4 space-y-3 text-stone-700">
                <div>
                  <p className="text-sm font-semibold text-sage-800">Breakfast</p>
                  <p className="text-sm">Greek yoghurt with berries, a spoon of honey and a sprinkle of oats</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-sage-800">Lunch</p>
                  <p className="text-sm">Family pasta bake with extra vegetables – your portion is slightly smaller with side salad</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-sage-800">Snack</p>
                  <p className="text-sm">Apple slices with a small handful of nuts</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-sage-800">Dinner</p>
                  <p className="text-sm">Oven-baked chicken thighs, mixed vegetables and boiled potatoes</p>
                </div>
              </div>

              <div className="mt-4 bg-amber-50 border border-amber-100 rounded-xl p-4">
                <p className="text-sm font-semibold text-amber-900">Sweet treat guidance</p>
                <p className="text-sm text-amber-900 mt-1 leading-relaxed">If you are craving something sweet today, you have one mindful treat planned: a small chocolate bar or slice of cake. Have it earlier in the day or before your workout, enjoy it slowly and without guilt, then move on with your plan.</p>
              </div>

              <a href="#nutrition-plan" className="mt-6 inline-flex items-center text-sage-700 font-semibold hover:text-sage-800">
                View full nutrition & supplements plan
                <span className="ml-2">→</span>
              </a>
            </div>

            {/* Mindfulness card */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm flex flex-col">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-sage-900">Today’s Mindfulness</h3>
                <p className="text-stone-700">5 minutes to reset your mind</p>
              </div>

              <div className="mt-4 space-y-3 text-stone-700">
                <div>
                  <p className="text-sm font-semibold text-sage-800">Today’s practice</p>
                  <p className="text-sm">4–4–6 breathing</p>
                  <p className="text-sm text-stone-600 mt-1">Inhale through your nose for 4 seconds, hold for 4 seconds, exhale slowly through your mouth for 6 seconds. Repeat for 6–8 rounds.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-sage-800">When to use this</p>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
                    <li>Before walking into the gym</li>
                    <li>After a stressful moment with the kids</li>
                    <li>Any time you notice guilt or negative self-talk</li>
                  </ul>
                </div>
                <p className="italic text-sm text-sage-900">“Small consistent steps change more than one big push.”</p>
              </div>

              <a href="#mindfulness-programme" className="mt-6 inline-flex items-center text-sage-700 font-semibold hover:text-sage-800">
                View full mindfulness programme
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Workout Programme */}
        <section id="workout-programme" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-serif font-bold text-sage-900">Your Workout Programme</h2>
            <p className="text-stone-700 max-w-3xl">This is your full 8–12 week training map. It is built to protect your knees, rebuild confidence in the gym and fit around a busy family schedule.</p>
          </div>

          <div className="bg-sage-50 border border-sage-100 rounded-2xl p-6 space-y-3">
            <h3 className="text-lg font-semibold text-sage-900">Before you start</h3>
            <ul className="list-disc list-inside text-stone-700 space-y-2">
              <li>Mild knee pain on stairs and when squatting – avoid deep, fast or bouncing squats.</li>
              <li>Focus on slow, controlled movements and stable knee alignment.</li>
              <li>If pain is sharp or worsens, stop the exercise and switch to a low-impact alternative.</li>
              <li>Always warm up for at least 5 minutes before lower body sessions.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-sage-900">Weekly structure</h3>
            <p className="text-stone-700 max-w-3xl">You are aiming for 3 workouts per week. If life gets busy, do 2 and let that be enough – no punishment, no “starting over”.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-stone-200 rounded-xl p-4 bg-white">
                <p className="text-sm font-semibold text-sage-800">Day 1 – Lower body strength (knee-friendly)</p>
                <ul className="mt-2 list-disc list-inside text-sm text-stone-700 space-y-1">
                  <li>Warm-up walk or step-ups</li>
                  <li>Supported goblet squats</li>
                  <li>Glute bridges</li>
                  <li>Seated leg press</li>
                  <li>Notes for your knees: keep range comfortable, slow tempo.</li>
                </ul>
              </div>
              <div className="border border-stone-200 rounded-xl p-4 bg-white">
                <p className="text-sm font-semibold text-sage-800">Day 2 – Upper body + core</p>
                <ul className="mt-2 list-disc list-inside text-sm text-stone-700 space-y-1">
                  <li>Seated row or band rows</li>
                  <li>Dumbbell chest press</li>
                  <li>Lat pulldown</li>
                  <li>Core: bird dog holds</li>
                  <li>Stretch: chest and upper back</li>
                </ul>
              </div>
              <div className="border border-stone-200 rounded-xl p-4 bg-white">
                <p className="text-sm font-semibold text-sage-800">Day 3 – Full-body circuit (optional home session)</p>
                <ul className="mt-2 list-disc list-inside text-sm text-stone-700 space-y-1">
                  <li>Bodyweight squats to chair</li>
                  <li>Incline press-ups on a bench or wall</li>
                  <li>Hip hinge with dumbbells</li>
                  <li>Marching glute bridges</li>
                  <li>Notes for your knees: avoid jumping, keep impact low.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-sage-900">Alternative exercises</h3>
            <div className="bg-white border border-stone-200 rounded-xl p-4 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-stone-700">
                <span className="font-medium text-sage-800">Instead of: standard lunges</span>
                <span className="text-stone-700">Do: supported reverse lunges, holding onto a rail</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-stone-700 border-t border-stone-100 pt-3">
                <span className="font-medium text-sage-800">Instead of: jump squats</span>
                <span className="text-stone-700">Do: slow bodyweight squats to a chair</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-stone-700 border-t border-stone-100 pt-3">
                <span className="font-medium text-sage-800">Instead of: running</span>
                <span className="text-stone-700">Do: brisk walking or incline treadmill</span>
              </div>
            </div>
            <p className="text-sm text-stone-700">You will review these exercises with Enes during check-ins, and they can be adjusted if anything feels uncomfortable.</p>
          </div>
        </section>

        {/* Nutrition Plan */}
        <section id="nutrition-plan" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-serif font-bold text-sage-900">Your Nutrition & Supplements Plan</h2>
            <p className="text-stone-700 max-w-3xl">This plan is designed for a busy mum cooking for a family, with a sweet tooth and limited time. It focuses on simpler changes you can keep, not strict rules you will break.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-stone-200 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-sage-900">Your preferences & boundaries</h3>
              <ul className="mt-3 list-disc list-inside text-stone-700 space-y-2">
                <li>You enjoy chocolate and cake – these are allowed in mindful portions.</li>
                <li>Family-friendly meals are a must – no separate diet meals for you alone.</li>
                <li>You prefer warm, savoury dinners and dislike heavy late-night eating.</li>
              </ul>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-sage-900">Daily structure</h3>
              <ul className="mt-3 list-disc list-inside text-stone-700 space-y-2">
                <li>Breakfast: protein + fruit</li>
                <li>Lunch: family meal with portion and plate adjustments</li>
                <li>Afternoon: planned snack</li>
                <li>Dinner: balanced plate with vegetables, protein and smart carbs</li>
              </ul>
            </div>
          </div>

          <div className="bg-sage-50 border border-sage-100 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-sage-900">Sweet treats – your rules</h3>
            <ul className="mt-3 list-disc list-inside text-stone-700 space-y-2">
              <li>One planned treat per day if you genuinely want it.</li>
              <li>Preferably earlier in the day or before activity.</li>
              <li>Eat slowly, with attention, without guilt.</li>
              <li>If you have more than planned, note it and move on – no punishment.</li>
            </ul>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-sage-900">Supplements (sample)</h3>
            <ul className="mt-3 list-disc list-inside text-stone-700 space-y-2">
              <li>Options like vitamin D, omega-3 or a basic multivitamin may be discussed with your GP.</li>
              <li>No supplements are required for this plan to work; they are optional extras.</li>
            </ul>
          </div>
        </section>

        {/* Mindfulness Programme */}
        <section id="mindfulness-programme" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-serif font-bold text-sage-900">Your Mindfulness Programme</h2>
            <p className="text-stone-700 max-w-3xl">This part of your plan helps you manage stress, guilt and negative self-talk so you can actually stick with your workouts and nutrition changes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-stone-200 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-sage-900">Daily practices</h3>
              <ul className="mt-3 list-disc list-inside text-stone-700 space-y-2">
                <li>4–4–6 breathing (5 minutes)</li>
                <li>1-minute check-in: “What do I need right now?”</li>
                <li>Gratitude note: write down one thing your body did for you today.</li>
              </ul>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-sage-900">Weekly reflections</h3>
              <ul className="mt-3 list-disc list-inside text-stone-700 space-y-2">
                <li>What worked well this week, even if the week felt messy?</li>
                <li>Where did “all or nothing” thinking show up, and how could you respond differently next time?</li>
                <li>What small habit made the biggest difference to your energy?</li>
              </ul>
            </div>
          </div>

          <div className="bg-sage-50 border border-sage-100 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-sage-900">When things go off-plan</h3>
            <p className="mt-2 text-stone-700 leading-relaxed">If you miss workouts or overeat, your only job is to notice what happened, be kind to yourself and restart with the next small step. There is no punishment, no restarting the whole programme.</p>
          </div>
        </section>

        {/* Useful Resources */}
        <section id="useful-resources" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-serif font-bold text-sage-900">Useful Resources</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-stone-200 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-sage-900">Local movement spots (example)</h3>
              <ul className="mt-3 list-disc list-inside text-stone-700 space-y-2">
                <li>Local park routes for walking around Alexandra Park</li>
                <li>Outdoor gym area in the park (bodyweight stations)</li>
                <li>Nearby budget-friendly gym – example placeholder</li>
              </ul>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-sage-900">Apps & tools</h3>
              <ul className="mt-3 list-disc list-inside text-stone-700 space-y-2">
                <li>Habit tracking app – for ticking off workouts</li>
                <li>Timer app – for intervals and breathing exercises</li>
                <li>Notes app – for writing reflections and wins</li>
                <li>Calm background playlists – to make the gym feel friendlier</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Progress Tracking */}
        <section id="progress-tracking" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-serif font-bold text-sage-900">Progress Tracking</h2>
            <p className="text-stone-700 max-w-3xl">Here is where you will log your progress and see your journey over time. On this sample page, the data is pre-filled to show how it will look.</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-6 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-sage-900">Week-by-week check-in</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left text-stone-700">
                    <thead>
                      <tr className="bg-sage-50 text-sage-900">
                        <th className="px-4 py-2">Week</th>
                        <th className="px-4 py-2">Workouts completed</th>
                        <th className="px-4 py-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-sage-900">Week 1</td>
                        <td className="px-4 py-3">2 of 3</td>
                        <td className="px-4 py-3">Felt nervous but finished both sessions; knees okay.</td>
                      </tr>
                      <tr className="bg-sage-50/60">
                        <td className="px-4 py-3 font-semibold text-sage-900">Week 2</td>
                        <td className="px-4 py-3">3 of 3</td>
                        <td className="px-4 py-3">Added light leg press; confidence rising.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-sage-900">Week 3</td>
                        <td className="px-4 py-3">2 of 3</td>
                        <td className="px-4 py-3">Busy with kids; kept up with walks and breathing.</td>
                      </tr>
                      <tr className="bg-sage-50/60">
                        <td className="px-4 py-3 font-semibold text-sage-900">Week 4</td>
                        <td className="px-4 py-3">2 of 3 (so far)</td>
                        <td className="px-4 py-3">Knees feeling steadier; ready to try a new machine.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-sage-50 border border-sage-100 rounded-xl p-5 flex flex-col justify-center">
                <p className="text-sm font-semibold text-sage-800">Consistency score (last 4 weeks)</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-stone-700 text-sm">
                    <span>Goal consistency</span>
                    <span className="font-semibold text-sage-800">72%</span>
                  </div>
                  <div className="h-4 w-full bg-white border border-sage-100 rounded-full overflow-hidden mt-2">
                    <div className="h-full w-[72%] bg-sage-600 rounded-full"></div>
                  </div>
                  <p className="mt-3 text-sm text-stone-700">You are showing steady follow-through. Keep celebrating the small wins and adjusting when life gets busy.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-stone-700 mt-4">Enes will review this with you during your check-ins and adjust your plan when needed.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
