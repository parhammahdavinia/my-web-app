FROM python:3.11-slim

WORKDIR /app

# نصب dependencies سیستم
RUN apt-get update && apt-get install -y \
    gcc \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . .

# برای development از runserver استفاده کن
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# برای production این خط را uncomment کن:
# CMD ["gunicorn", "blog_backend.wsgi:application", "--bind", "0.0.0.0:8000"]