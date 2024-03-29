import { useEffect, useState } from "react";
import styles from "./navbar.module.css";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { magic } from "../../lib/magic-client";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState("");
  const [didToken, setDidToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const applyUsernameInNav = async () => {
      try {
        const { email, issuer } = await magic.user.getMetadata();
        const didToken = await magic.user.getIdToken();
        if (email) {
          setUsername(email);
          setDidToken(didToken);
        }
      } catch (error) {}
    };
    applyUsernameInNav();
  }, []);

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };

  const handleShowDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const handleSignout = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${didToken}`,
          "Content-Type": "application/json",
        },
      });

      const res = await response.json();
    } catch (error) {
      router.push("/login");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoLink} href="/">
          <a>
            <div className={styles.logoWrapper}>
              <Image
                src="/static/netflix.svg"
                alt="Netflix logo"
                width="128px"
                height="34px"
              />
            </div>
          </a>
        </Link>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              {/** Expand more icon */}
              <Image
                src={"/static/expand_more.svg"}
                alt="Expand dropdown"
                width="24px"
                height="24px"
              />
            </button>

            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <a className={styles.linkName} onClick={handleSignout}>
                    Sign out
                  </a>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
// import styles from "./navbar.module.css";
// import { useRouter } from "next/router";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { magic } from "../../lib/magic-client";

// const NavBar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const [username, setUsername] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     async function getUsername() {
//       try {
//         const { email, issuer } = await magic.user.getMetadata();
//         const didToken = await magic.user.getIdToken();
//
//         if (email) {
//           setUsername(email);
//         }
//       } catch (error) {
//
//       }
//     }
//     getUsername();
//   }, []);

//   const handleSignOut = async (e) => {
//     e.preventDefault();

//     try {
//       await magic.user.logout();
//
//       router.push("/login");
//     } catch (error) {
//
//       router.push("/login");
//     }
//   };

//   const handleOnClickHome = (e) => {
//     e.preventDefault();
//     router.push("/");
//   };

//   const handleOnClickMyList = (e) => {
//     e.preventDefault();
//     router.push("/browse/my-list");
//   };

//   const handleShowDropdown = (e) => {
//     e.preventDefault();
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         <a className={styles.logoLink}>
//           <div className={styles.logoWrapper}>
//             <Image
//               src={"/static/netflix.svg"}
//               alt="netflx logo"
//               width="128px"
//               height="34px"
//             />
//           </div>
//         </a>

//         <ul className={styles.navItems}>
//           <li className={styles.navItem} onClick={handleOnClickHome}>
//             Home
//           </li>
//           <li className={styles.navItem2} onClick={handleOnClickMyList}>
//             My List
//           </li>
//         </ul>

//         <nav className={styles.navContainer}>
//           <div>
//             <button className={styles.usernameBtn} onClick={handleShowDropdown}>
//               <p className={styles.username}>{username}</p>
//               <Image
//                 src={"/static/expand_more.svg"}
//                 alt="expand dropdown"
//                 width="24px"
//                 height="24px"
//               />
//             </button>
//             {showDropdown && (
//               <div className={styles.navDropdown}>
//                 <div>
//                   <a className={styles.linkName} onClick={handleSignOut}>
//                     Sign Out
//                   </a>
//                   =<div className={styles.lineWrapper}></div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
