const add = require('../src/add');


test('',() => {
    expect(add(1, 2)).toBe(3);
})

/**
 * collectCoverage: false;
 * jest --coverage 커버리지 수동 확인
 * 
 * jest --watchAll 매번 모든 테스트파일 실행
 * 
 * jest --watch 내가 활발하게 작업중인 테스트 파일만 자동실행 (git이 설치되어있어야함.)
 * 근데 조심해야함 package.json 수정하면 실행중인 jest를 종료하고 재실행해야함.
 */