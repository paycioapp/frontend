type HeaderProps = {
    title: string;
    text: string
  };
  
  const PageHeader = ({ title,text }: HeaderProps) => {
    return (
      <section className="track-header relative">
        <div className="site-width">
          <h1 className="h1-tag">{title}</h1>
          <p className="mt-3 text-lg max-w-[920px]">{text}</p>
        </div>
      </section>
    );
  };
  
  export default PageHeader;
  