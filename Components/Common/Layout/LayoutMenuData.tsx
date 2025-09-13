import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { off } from 'process';
const Navdata = () => {
	//state data
	const [isAuth, setIsAuth] = useState(false);
	const [universities, setUniversities] = useState(false);
	const [country, setCountry] = useState(false);
	const [service, setService] = useState(false);
	const [vendor, setVendor] = useState(false);
	const [user, setUser] = useState(false);
	const [vacations, setVacations] = useState(false);
	const [categories, setCategories] = useState(false);
	const [order, setOrder] = useState(false);
	const [delivery, setDelivery] = useState(false);
	const [location, setLocation] = useState(false);
	const [recharge, setRecharge] = useState(false);
	const [firsttimerecharge, setfirsttimeRecharge] = useState(false);
	const [testimonial, setTestimonial] = useState(false);
	const [contactForm, setContactForm] = useState(false);
	const [subscribeMail, setSubscibeMail] = useState(false);
	const [review, setReview] = useState(false);
	const [isPages, setIsPages] = useState(false);
	const [isMultiLevel, setIsMultiLevel] = useState(false);

	// Authentication
	const [isSignIn, setIsSignIn] = useState(false);
	const [isSignUp, setIsSignUp] = useState(false);
	const [isPasswordReset, setIsPasswordReset] = useState(false);
	const [isPasswordCreate, setIsPasswordCreate] = useState(false);
	const [isLockScreen, setIsLockScreen] = useState(false);
	const [isLogout, setIsLogout] = useState(false);
	const [isSuccessMessage, setIsSuccessMessage] = useState(false);
	const [isVerification, setIsVerification] = useState(false);
	const [isError, setIsError] = useState(false);
	const [hub, setHub] = useState(false);
	const [partner, setPartner] = useState(false);
	const [banner, setBanner] = useState(false);
	const [slider, setSlider] = useState(false);
	const [offerHeading, setOfferHeading] = useState(false);
	const [membership, setMembership] = useState(false);
	const [city, setCity] = useState(false);
	const [blog, setblog] = useState(false);
	const [stock, setStock] = useState(false);
	const [offer, setOffer] = useState(false);
	// Pages
	const [isProfile, setIsProfile] = useState(false);

	// Multi Level
	const [isLevel1, setIsLevel1] = useState(false);
	const [isLevel2, setIsLevel2] = useState(false);

	const [isCurrentState, setIsCurrentState] = useState('');

	function updateIconSidebar(e: any) {
		if (e && e.target && e.target.getAttribute('sub-items')) {
			const ul: any = document.getElementById('two-column-menu');
			const iconItems: any = ul.querySelectorAll('.nav-icon.active');
			let activeIconItems = [...iconItems];
			activeIconItems.forEach((item) => {
				item.classList.remove('active');
				var id: any = item.getAttribute('sub-items');
				var menusId = document.getElementById(id);
				if (menusId) {
					(menusId.parentElement as HTMLElement).classList.remove('show');
				}
			});
			e.target.classList.add('active');
		}
	}

	useEffect(() => {
		document.body.classList.remove('twocolumn-panel');
		if (isCurrentState !== 'Auth') {
			setIsAuth(false);
		}

		if (isCurrentState !== 'blog') {
			setIsPages(false);
		}

		if (isCurrentState !== 'universities') {
			setUniversities(false);
		}
		if (isCurrentState !== 'country') {
			setCountry(false);
		}

		if (isCurrentState !== 'MuliLevel') {
			setIsMultiLevel(false);
		}
		if (isCurrentState === 'Dashboard') {
			Router.push('/dashboard');
			document.body.classList.add('twocolumn-panel');
		}
		if (isCurrentState === 'Widgets') {
			Router.push('/widgets');
			document.body.classList.add('twocolumn-panel');
		}
		if (isCurrentState === 'Calendar') {
			Router.push('/calendar');
			document.body.classList.add('twocolumn-panel');
		}
		if (isCurrentState === 'API Key') {
			Router.push('/api-key');
			document.body.classList.add('twocolumn-panel');
		}
		if (isCurrentState === 'Contact') {
			Router.push('/contact');
			document.body.classList.add('twocolumn-panel');
		}
		if (isCurrentState === 'Leaderboard') {
			Router.push('/leaderboard');
			document.body.classList.add('twocolumn-panel');
		}
		if (isCurrentState === 'Components') {
			Router.push('https://vidhyaroute-backend-components.vercel.app/');
			document.body.classList.add('twocolumn-panel');
		}
	}, [isCurrentState, isAuth, isPages, isMultiLevel]);

	const menuItems: any = [
		{
			label: 'Menu',
			isHeader: true,
		},
		{
			id: 'dashboard',
			label: 'Dashboard',
			icon: 'bi bi-speedometer2',
			link: '/dashboard',
			click: function (e: any) {
				e.preventDefault();
				setIsCurrentState('Dashboard');
			},
		},
		{
			label: 'Pages',
			isHeader: true,
		},
		{
			id: 'blog',
			label: 'Blog',
			icon: 'bi bi-stack',
			link: '/#',
			click: function (e: any) {
				e.preventDefault();
				setblog(!blog);
				setIsCurrentState('blog');
				updateIconSidebar(e);
			},
			stateVariables: blog,
			subItems: [
				{
					id: 'blog',
					label: 'Form',
					link: '/blog',
					click: function (e: any) {
						e.preventDefault();
						setIsSignUp(!isSignUp);
					},
					parentId: 'blog',
				},
			],
		},
		{
			id: 'universities',
			label: 'University',
			icon: 'bi bi-mortarboard',
			link: '/#',
			click: function (e: any) {
				e.preventDefault();
				setUniversities(!universities);
				setIsCurrentState('universities');
				updateIconSidebar(e);
			},
			stateVariables: universities,
			subItems: [
				{
					id: 'universities',
					label: 'Form',
					link: '/universities',
					click: function (e: any) {
						e.preventDefault();
					},
					parentId: 'universities',
				},
			],
		},
		{
			id: 'country',
			label: 'Country',
			icon: 'bi bi-globe-americas',
			link: '/#',
			click: function (e: any) {
				e.preventDefault();
				setCountry(!country);
				setIsCurrentState('country');
				updateIconSidebar(e);
			},
			stateVariables: country,
			subItems: [
				{
					id: 'country',
					label: 'Form',
					link: '/country',
					click: function (e: any) {
						e.preventDefault();
					},
					parentId: 'country',
				},
			],
		},
		{
			id: 'service',
			label: 'Services',
			icon: 'bi bi-stack',
			link: '/#',
			click: function (e: any) {
				e.preventDefault();
				setService(!service);
				setIsCurrentState('service');
				updateIconSidebar(e);
			},
			stateVariables: service,
			subItems: [
				{
					id: 'service',
					label: 'Form',
					link: '/services',
					click: function (e: any) {
						e.preventDefault();
					},
					parentId: 'service',
				},
			],
		},

		// {
		//   id: "pages",
		//   label: "Pages",
		//   icon: "bi bi-journal-medical",
		//   link: "/#",
		//   click: function (e: any) {
		//     e.preventDefault();
		//     setIsPages(!isPages);
		//     setIsCurrentState("Pages");
		//     updateIconSidebar(e);
		//   },
		//   stateVariables: isPages,
		//   subItems: [
		//     {
		//       id: "starter",
		//       label: "Starter",
		//       link: "/pages/starter",
		//       parentId: "pages",
		//     },
		//     {
		//       id: "profile",
		//       label: "Profile",
		//       link: "/#",
		//       isChildItem: true,
		//       click: function (e: any) {
		//         e.preventDefault();
		//         setIsProfile(!isProfile);
		//       },
		//       parentId: "pages",
		//       stateVariables: isProfile,
		//       childItems: [
		//         {
		//           id: 1,
		//           label: "Simple Page",
		//           link: "/pages/profile/page",
		//           parentId: "pages",
		//         },
		//         {
		//           id: 2,
		//           label: "Settings",
		//           link: "/pages/profile/settings",
		//           parentId: "pages",
		//         },
		//       ],
		//     },
		//     { id: "team", label: "Team", link: "/pages/team", parentId: "pages" },
		//     {
		//       id: "timeline",
		//       label: "Timeline",
		//       link: "/pages/timeline",
		//       parentId: "pages",
		//     },
		//     { id: "faqs", label: "FAQs", link: "/pages/faqs", parentId: "pages" },
		//     {
		//       id: "pricing",
		//       label: "Pricing",
		//       link: "/pages/pricing",
		//       parentId: "pages",
		//     },
		//     {
		//       id: "maintenance",
		//       label: "Maintenance",
		//       link: "/pages/maintenance",
		//       parentId: "pages",
		//     },
		//     {
		//       id: "comingSoon",
		//       label: "Coming Soon",
		//       link: "/pages/coming-soon",
		//       parentId: "pages",
		//     },
		//     {
		//       id: "sitemap",
		//       label: "Sitemap",
		//       link: "/pages/sitemap",
		//       parentId: "pages",
		//     },
		//     {
		//       id: "searchResults",
		//       label: "Search Results",
		//       link: "/pages/search-results",
		//       parentId: "pages",
		//     },
		//   ],
		// },
		// {
		//   id: "widgets",
		//   label: "Widgets",
		//   icon: "bi bi-hdd-stack",
		//   link: "/widgets",
		//   click: function (e: any) {
		//     e.preventDefault();
		//     setIsCurrentState("Widgets");
		//   },
		// },
		// {
		//   id: "components",
		//   label: "Components",
		//   icon: "bi bi-layers",
		//   isBlankLink: true,
		//   link: "https://vidhyaroute-backend-components.vercel.app/",
		//   click: function (e: any) {
		//     e.preventDefault();
		//     setIsCurrentState("Components");
		//   },
		// },
		// {
		//   label: "Apps",
		//   isHeader: true,
		// },
		// {
		//   id: "calendar",
		//   label: "Calendar",
		//   icon: "bi bi-calendar3",
		//   link: "/calendar",
		//   click: function (e: any) {
		//     e.preventDefault();
		//     setIsCurrentState("Calendar");
		//   },
		// },
		// {
		//   id: "api-key",
		//   label: "API Key",
		//   icon: "bi bi-key",
		//   link: "/api-key",
		//   click: function (e: any) {
		//     e.preventDefault();
		//     setIsCurrentState("API Key");
		//   },
		// },
		// {
		//   id: "contact",
		//   label: "Contact",
		//   icon: "bi bi-person-square",
		//   link: "/contact",
		//   click: function (e: any) {
		//     e.preventDefault();
		//     setIsCurrentState("Contact");
		//   },
		// },
		// {
		//   id: "leaderboard",
		//   label: "Leaderboard",
		//   icon: "bi bi-gem",
		//   link: "/leaderboard",
		//   click: function (e: any) {
		//     e.preventDefault();
		//     setIsCurrentState("Leaderboard");
		//   },
		// },
		// {
		//   label: "Layouts",
		//   isHeader: true,
		// },
		// {
		//   id: "multilevel",
		//   label: "Multi Level",
		//   icon: "bi bi-share",
		//   link: "/#",
		//   click: function (e: any) {
		//     e.preventDefault();
		//     setIsMultiLevel(!isMultiLevel);
		//     setIsCurrentState("MuliLevel");
		//     updateIconSidebar(e);
		//   },
		//   stateVariables: isMultiLevel,
		//   subItems: [
		//     {
		//       id: "level1.1",
		//       label: "Level 1.1",
		//       link: "/#",
		//       parentId: "multilevel",
		//     },
		//     {
		//       id: "level1.2",
		//       label: "Level 1.2",
		//       link: "/#",
		//       isChildItem: true,
		//       click: function (e: any) {
		//         e.preventDefault();
		//         setIsLevel1(!isLevel1);
		//       },
		//       stateVariables: isLevel1,
		//       childItems: [
		//         { id: 1, label: "Level 2.1", link: "/#" },
		//         {
		//           id: "level2.2",
		//           label: "Level 2.2",
		//           link: "/#",
		//           isChildItem: true,
		//           click: function (e: any) {
		//             e.preventDefault();
		//             setIsLevel2(!isLevel2);
		//           },
		//           stateVariables: isLevel2,
		//           childItems: [
		//             { id: 1, label: "Level 3.1", link: "/#" },
		//             { id: 2, label: "Level 3.2", link: "/#" },
		//           ],
		//         },
		//       ],
		//     },
		//   ],
		// },
	];
	return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
