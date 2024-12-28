export const Person = ({ person, age, isMerried, partnerName, sex }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person}</h2>
    {person !== 'Olya' && <p className="Person__age">I am {age}</p>}
    {isMerried ? (
      <p className="Person__partner">
        {partnerName} is my {sex === 'm' ? 'wife' : 'husband'}
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);
