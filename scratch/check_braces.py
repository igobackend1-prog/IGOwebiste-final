
with open('d:/Igo-websites/Igo-Main website/src/pages/Index.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

balance = 0
for i, char in enumerate(content):
    if char == '{':
        balance += 1
    elif char == '}':
        balance -= 1
    
    if balance < 0:
        print(f"Excessive closing brace at index {i}")
        break

print(f"Final balance: {balance}")
