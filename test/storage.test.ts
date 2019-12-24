import { Storage } from '@modules/index';

// storage mocks
const storageMock = function() {
  let store: { [key: string]: string } = {};
  const storage = {
    getItem: function(key: string) {
      return store[key] || null;
    },
    setItem: function(key: string, value: string) {
      store[key] = value.toString();
    },
    removeItem: function(key: string) {
      delete store[key];
    },
    clear: function() {
      store = {};
    },
    key: function(index: number) {
      return Object.keys(store)[index];
    },
  };
  Object.defineProperty(storage, 'length', {
    get() {
      return Object.keys(store).length;
    },
  });
  return storage;
};

Object.defineProperty(window, 'localStorage', {
  value: storageMock(),
});

Object.defineProperty(window, 'sessionStorage', {
  value: storageMock(),
});

test('storage.ts with localStorage', () => {
  const storage = new Storage({ type: 'localStorage' });
  const version = '0.0.1';
  storage.add('version', version);
  storage.add('username', 'admin');
  expect(storage.count()).toBe(2);
});

test('storage.ts with sessionStorage', () => {
  const storage = new Storage({ type: 'sessionStorage' });
  const version = '0.0.1';
  storage.add('version', version);
  storage.remove('version');
  expect(storage.count()).toBe(0);
});
