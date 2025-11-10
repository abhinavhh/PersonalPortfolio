// import ScrollAnimation from '../Animations/ScrollAnimation';
// // Or use the Framer Motion version:
// // import MotionScrollAnimation as ScrollAnimation from './MotionScrollAnimation';

// const RepeatingAnimationsDemo = () => {
//   return (
//     <div className="bg-gray-100">
//       {/* Hero Section */}
//       <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <ScrollAnimation animation="fade">
//             <h1 className="text-5xl font-bold mb-6">Scroll Animation Demo</h1>
//           </ScrollAnimation>
//           <ScrollAnimation animation="slideUp" delay={300}>
//             <p className="text-xl max-w-2xl mx-auto">Scroll down to see all animations. Each animation triggers every time you scroll past the elements.</p>
//           </ScrollAnimation>
//           <ScrollAnimation animation="scale" delay={600}>
//             <div className="mt-8">
//               <a href="#demos" className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium inline-block hover:bg-blue-50 transition-colors">
//                 See Animations
//               </a>
//             </div>
//           </ScrollAnimation>
//         </div>
//       </section>

//       {/* Spacer to ensure scrolling */}
//       <div className="h-64 bg-gray-100"></div>

//       {/* Demo Sections */}
//       <section id="demos" className="py-20">
//         <div className="container mx-auto px-4">
//           <ScrollAnimation animation="scale">
//             <h2 className="text-3xl font-bold text-center mb-16">Fade Animations</h2>
//           </ScrollAnimation>

//           <div className="grid md:grid-cols-3 gap-8 mb-32">
//             <ScrollAnimation animation="fade" delay={0}>
//               <div className="bg-white p-6 rounded-lg shadow-lg h-64 flex items-center justify-center">
//                 <h3 className="text-2xl font-bold text-center">Fade In</h3>
//               </div>
//             </ScrollAnimation>
            
//             <ScrollAnimation animation="fade" delay={200}>
//               <div className="bg-white p-6 rounded-lg shadow-lg h-64 flex items-center justify-center">
//                 <h3 className="text-2xl font-bold text-center">Fade In (Delayed)</h3>
//               </div>
//             </ScrollAnimation>
            
//             <ScrollAnimation animation="fade" delay={400}>
//               <div className="bg-white p-6 rounded-lg shadow-lg h-64 flex items-center justify-center">
//                 <h3 className="text-2xl font-bold text-center">Fade In (More Delayed)</h3>
//               </div>
//             </ScrollAnimation>
//           </div>

//           {/* Spacer */}
//           <div className="h-32"></div>

//           <ScrollAnimation animation="scale">
//             <h2 className="text-3xl font-bold text-center mb-16">Slide Animations</h2>
//           </ScrollAnimation>

//           <div className="grid md:grid-cols-3 gap-8 mb-32">
//             <ScrollAnimation animation="slideUp" delay={0}>
//               <div className="bg-white p-6 rounded-lg shadow-lg h-64 flex items-center justify-center">
//                 <h3 className="text-2xl font-bold text-center">Slide Up</h3>
//               </div>
//             </ScrollAnimation>
            
//             <ScrollAnimation animation="slideRight" delay={200}>
//               <div className="bg-white p-6 rounded-lg shadow-lg h-64 flex items-center justify-center">
//                 <h3 className="text-2xl font-bold text-center">Slide Right</h3>
//               </div>
//             </ScrollAnimation>
            
//             <ScrollAnimation animation="scale" delay={400}>
//               <div className="bg-white p-6 rounded-lg shadow-lg h-64 flex items-center justify-center">
//                 <h3 className="text-2xl font-bold text-center">Scale In</h3>
//               </div>
//             </ScrollAnimation>
//           </div>

//           {/* More content to ensure scrolling */}
//           <div className="h-64"></div>

//           <ScrollAnimation animation="scale">
//             <h2 className="text-3xl font-bold text-center mb-16">Content Sections</h2>
//           </ScrollAnimation>

//           <div className="grid md:grid-cols-2 gap-16 mb-32">
//             <ScrollAnimation animation="slideRight">
//               <div className="bg-white p-8 rounded-lg shadow-lg">
//                 <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
//                 <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                 <p className="text-gray-700">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//               </div>
//             </ScrollAnimation>
            
//             <ScrollAnimation animation="slideUp" delay={300}>
//               <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg">
//                 <h3 className="text-2xl font-bold mb-4">Our Values</h3>
//                 <p className="mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
//                 <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//               </div>
//             </ScrollAnimation>
//           </div>
//         </div>
//       </section>

//       {/* Final section */}
//       <section className="py-20 bg-gray-800 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <ScrollAnimation animation="scale">
//             <h2 className="text-3xl font-bold mb-8">Ready to get started?</h2>
//           </ScrollAnimation>
          
//           <ScrollAnimation animation="fade" delay={300}>
//             <p className="text-xl max-w-2xl mx-auto mb-8">Implement these animations in your own projects to create engaging scroll experiences.</p>
//           </ScrollAnimation>
          
//           <ScrollAnimation animation="slideUp" delay={600}>
//             <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
//               Start Now
//             </button>
//           </ScrollAnimation>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default RepeatingAnimationsDemo;