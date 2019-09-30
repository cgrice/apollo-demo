up:
	docker-compose up -d
	cd api && prisma deploy

reset:
	docker-compose down
	docker-compose up -d
	sleep 5
	cd api && prisma reset --force && prisma deploy && prisma seed
