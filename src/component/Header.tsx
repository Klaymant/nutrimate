type Props = {
  pageTitle: string;
};

const Header = ({ pageTitle }: Props) => (
  <>
    <section className="rounded-xl bg-cornflower-blue bg-opacity-50 my-4 py-4 text-center font-semibold shadow-xl">
      {pageTitle}
    </section>
  </>
);

export default Header;
