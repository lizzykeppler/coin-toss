const test = QUnit.test;

function headsorTails(randomNumber) {
    if(randomNumber < 0.5) {
        return 'tails';
    }
    else {
        return 'heads';
    }
}


test('if randomNumber is less than 0.5, return tails', function(assert) {
    const result = headsorTails(0.3);
    assert.equal(result, 'tails');
});

test('if randomNumber is greater than or equal to 0.5, return heads', function(assert) {
    const result = headsorTails(0.8);
    assert.equal(result, 'heads');
});
