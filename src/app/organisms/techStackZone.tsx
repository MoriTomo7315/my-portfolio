export default function TechStackZone() {
  return (
    <div className="grid lg:grid-cols-3 lg:gap-8 md:gap-6 sm:gap-4">
      <div className="bg-white w-full p-6">
        <h3 className="font-bold">Frontend/Mobile</h3>
        <ul>
          <li>React.js</li>
          <li>JavaScript/TypeScript</li>
        </ul>
      </div>
      <div className="bg-white w-full p-6">
        <h3 className="font-bold">Backend</h3>
        <ul>
          <li>Java, SpringBoot</li>
          <li>Golang</li>
          <li>Python, Django, Flask</li>
          <li>Ruby, Ruby on Rails</li>
        </ul>
      </div>
      <div className="bg-white w-full p-6">
        <h3 className="font-bold">Infrastructure/Others</h3>
        <ul>
          <li>Docker/Kubenetes</li>
          <li>Linux</li>
          <li>AWS (EC2, Lambda, API Gateway, Redshift, S3)</li>
          <li>
            GCP(Clound Run, Cloud Function, BigQuery, Cloud Pub/Sub, FireBase,
            FireStore)
          </li>
        </ul>
      </div>
    </div>
  );
}
