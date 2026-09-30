import Image from "next/image";

import styles from "./trusted-companies.module.css";

const companies = [
  {
    name: "Trusted company 1",
    logo: "/images/trusted-by/trusted1.png",
    width: 334,
    height: 70,
  },
  {
    name: "Trusted company 2",
    logo: "/images/trusted-by/trusted2.png",
    width: 336,
    height: 70,
  },
  {
    name: "Trusted company 3",
    logo: "/images/trusted-by/trusted3.png",
    width: 340,
    height: 70,
  },
  {
    name: "Trusted company 4",
    logo: "/images/trusted-by/trusted4.png",
    width: 340,
    height: 70,
  },
  {
    name: "Trusted company 5",
    logo: "/images/trusted-by/trusted5.png",
    width: 338,
    height: 70,
  },
];

const CompanyLogos = ({ duplicate = false }: { duplicate?: boolean }) => (
  <div
    className={`${styles.group} ${duplicate ? styles.duplicate : ""}`}
    role={duplicate ? undefined : "list"}
    aria-hidden={duplicate ? "true" : undefined}
  >
    {companies.map((company) => (
      <div
        key={`${company.name}-${duplicate ? "duplicate" : "original"}`}
        role={duplicate ? undefined : "listitem"}
      >
        <Image
          src={company.logo}
          alt={duplicate ? "" : company.name}
          width={company.width}
          height={company.height}
          sizes="(max-width: 640px) 132px, 168px"
          className={styles.logo}
        />
      </div>
    ))}
  </div>
);

const TrustedCompanies = () => {
  return (
    <section
      aria-label="Companies that trust ByteSpace"
      className="bg-[#F5F5F6] py-9 md:py-10 lg:py-11"
    >
      <div className={styles.viewport}>
        <div className={styles.track}>
          <CompanyLogos />
          <CompanyLogos duplicate />
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
