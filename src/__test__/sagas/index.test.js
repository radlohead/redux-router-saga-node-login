import root from '../../sagas';

it('sagas test', () => {
    const saga = root();
    expect(saga.next()).toMatchSnapshot();
});