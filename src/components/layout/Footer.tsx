const Footer = () => {
  return (
    <footer className="w-full p-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex justify-center items-center">
      <p className="text-sm text-slate-600 dark:text-slate-400">
        &copy; {new Date().getFullYear()} • Surafel Mengist. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;