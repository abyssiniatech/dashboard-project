

const Footer = () => {
  return (
    <div className="flex justify-center items-center p-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 sticky top-0 z-50">
      <h2 className="text-center">&copy; {new Date().getFullYear()}| | surafel mengist</h2>
    </div>
  )
};

export default Footer;