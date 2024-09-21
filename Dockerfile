# Используем официальный образ node для нашего приложения
FROM node:18-alpine

# Указываем рабочую директорию для приложения
WORKDIR /app

# Копируем package.json и yarn.lock для установки зависимостей
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install

# Копируем все исходные файлы приложения
COPY . .

# Создаем production-сборку приложения
RUN yarn build

# Открываем порт 7000 для сервировки приложения
EXPOSE 7000

# Устанавливаем Vite глобально для запуска production-сборки
RUN yarn global add serve

# Запускаем production-сборку через Vite на порту 7000
CMD ["serve", "-s", "dist", "-l", "7000"]
