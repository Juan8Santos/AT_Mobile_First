import Header from "./Header";
import GlobalMenu from "./GlobalMenu";
import ContextMenu from "./ContextMenu";
import MainContent from "./MainContent";
import Ads from "./Ads";
import Footer from "./Footer";
import styles from '../../styles/Ex5.module.css'

export default function Ex5() {
    return (
      <div className={styles.container}>
        <div className={styles.divTop}>
          <header className={styles.header}><Header /></header>
          <nav className={styles.globalMenu}><GlobalMenu /></nav>
        </div>
        <aside className={styles.contextMenu}><ContextMenu /></aside>
        <main className={styles.mainContent}><MainContent /></main>
        <div className={styles.ads}><Ads /></div>
        <footer className={styles.footer}><Footer /></footer>
      </div>
    )
}