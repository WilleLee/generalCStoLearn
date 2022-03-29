# "Algorithms to know"(https://medium.com/dare-to-be-better/6-algorithms-every-developer-should-know-f78b609c7e7c)

developer로서 꼭 알아야 할 6가지 알고리듬들을 소개함

## "sorting algorithms (정렬 알고리듬)"(https://namu.wiki/w/%EC%A0%95%EB%A0%AC%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#s-2.2.1)
: 하나의 리스트에 여러 아이템들을 순서대로 정렬시키는 것

- bubble sort : 인접한 두 elements를 연속적으로 정렬시킨다. (1번째 element와 2번째 element를 비교 -> 2번째와 3번째를 비교 -> ... -> n-1번째와 n번째 비교, 2번째부터 n-1까지 반복, ... 최대 n(n-1)/2번 정렬)
- merge sort : 입력값을 더 이상 쪼갤 수 없을 때까지 분할한 후, 다시 그 역순으로 병합해 가며 정렬시킨다. (divide and conquer strategy)
- quick sort : 원소 하나를 기준(피벗, pivot)으로 삼아 그보다 작은 것을 앞으로 빼내고 그 뒤에 피벗을 옮겨 피벗보다 작은 것, 큰 것으로 나눈뒤 나누어진 각각에서 다시 피벗을 잡고 정렬해서 각각의 크기가 0이나 1이 될 때까지 정렬한다.
- heap sort : elements를 힙 트리(완전이진트리)에 삽입한 후 최솟값 또는 최댓값의 제거를 반복한다.

2. searching algorithms (탐색 알고리듬)
: 하나의 데이터 셋에서 하나의 element를 찾아내는 알고리듬

- binary search
- breadth-first search (BFS)
- depth-frist search (DFS)

3. dynamic programming (동적 알고리듬)

4. recursion algorithms (재귀 알고리듬)
: 재귀(recursion)란 동일한 문제에 대한 smaller instances에서 앞서 제시된 해결책을 반복적으로 문제해결에 적용해 나가는 problem-solving technique이다. 모든 재귀 알고리듬은 아래의 스텝을 따른다.

- 알고리듬 셋업 단계. 재귀 알고리듬은 계산을 시작할 seed value(s)를 필요로 하는데, 이는 함수에 인수 형태로 주어질 수 있고, 혹은 비재귀적인 gateway function을 설정함으로써 주어질 수도 있다.
- 만약 current value(s)가 기존 base case와 동일하게 계산된다면, 동일 계산 방식을 수행하고 값을 return 한다.
- sub-problem마다에 적합하게 새로운 해결책을 적용하여 알고리듬을 설정한다.
- 결괏값들을 모아 문제를 해결한다.

5. divide and conquer (분할/정복)

6. hashing